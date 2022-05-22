import React, { useEffect, useState } from "react";

import "react-calendar/dist/Calendar.css";

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiSpacer,
  EuiTitle,
  EuiPanel,
  EuiStat,
  EuiIcon,
  EuiFlexGrid,
  EuiProgress,
} from "@elastic/eui";

import theme from "../../styles/themes/LightTheme";
import { ConduitPage } from "../../styles/themes/GlobalComponents";

import Calendar from "react-calendar";
import Lottie from "lottie-react";
import loadingLargeAnimation from "../../assets/animations/loadingLarge.json";
import underMaintanence from "../../assets/animations/underMaintenance.json";

import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { LOAD_USERS } from "../../graphql/authentiation";

import { useSelector, useDispatch } from "react-redux";
import { LOAD_USER_ASSIGNMENTS } from "../../graphql/user";
import { loadAssignmentsAsync } from "../../redux/reducers/assignments/assignments.thunk";
import { loadProfileAsync } from "../../redux/reducers/profile/profile.thunk";

export const Home = () => {
  const [value, onChange] = useState(new Date());
  const user = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [getAssignments, { called, data, loading, error }] = useLazyQuery(
    LOAD_USER_ASSIGNMENTS,
    {
      variables: { assignmentByUserId: user.profile._id },
      fetchPolicy: "network-only",
      onCompleted: (data) => {
        dispatch(loadAssignmentsAsync(data));
        const assignments = "hello";
      },
    }
  );

  useEffect(() => {
    getAssignments();
  }, []);

  const renderAssignments = (id) => {
    const assignments2 = useSelector((state) => state.assignments.assignments);
    console.log(assignments2);
    const assignments = user.profile.assignments;
    console.log(assignments);
    console.log("ABOVE ME BRO");
    return (
      <div>
        {assignments?.map((assignment) => (
          <div key={assignment._id}>
            <div className="titleRow" style={{ padding: "20px" }}>
              <EuiFlexGrid columns={2} direction="column">
                <EuiTitle>
                  <h1>{assignment.name}</h1>
                </EuiTitle>
                <div>
                  <EuiProgress
                    max={100}
                    size="m"
                    value={assignment.completion}
                    color="mediumslateblue"
                    valueText={true}
                    borderRadius={50}
                    style={{ borderRadius: "300px", color: "#016AB4" }}
                  />
                </div>
              </EuiFlexGrid>
            </div>
            <div className="bodyRow" style={{ paddingLeft: "20px" }}>
              <h3>{assignment.name}</h3>
              <h3>{assignment.dueDate}</h3>
              {console.log(assignment)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderNotifications = () => {};

  return (
    <ConduitPage>
      <EuiFlexGroup>
        <EuiFlexItem grow={1}>
          <EuiPanel>
            <EuiStat
              title="11"
              description="Courses to Complete"
              textAlign="right"
            >
              <EuiIcon type="empty" />
            </EuiStat>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiPanel>
            <EuiStat
              title="19"
              description="Reviews Awaiting"
              titleColor="accent"
              textAlign="right"
            >
              <EuiIcon type="clock" color="accent" />
            </EuiStat>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiPanel>
            <EuiStat
              title="11"
              description="Collected Cerificates"
              titleColor="success"
              textAlign="right"
            >
              <EuiIcon type="check" color="success" />
            </EuiStat>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiPanel>
            <EuiStat
              title="3"
              description="Overdue Courses"
              titleColor="danger"
              textAlign="right"
            >
              <EuiIcon type="alert" color="danger" />
            </EuiStat>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer />

      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem grow={1}>
          <EuiFlexGroup
            gutterSize="l"
            style={{ padding: "12px", height: "800px", alignContent: "left" }}
          >
            <EuiCard title="Courses" textAlign="left">
              {renderAssignments()}
            </EuiCard>
          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexGrid gutterSize="l" style={{ padding: "12px" }}>
          <EuiFlexItem grow={false}>
            <EuiCard style={{ maxHeight: "400px" }} title="calendar">
              <Calendar onChange={onChange} value={value} />
            </EuiCard>
            <EuiSpacer />
            <EuiFlexItem>
              <EuiCard title="Notifications">
                <div style={{ minHeight: "300px" }}>
                  <Lottie
                    loop={true}
                    autoPlay={true}
                    animationData={underMaintanence}
                    height={1000}
                    width={100}
                    style={{ height: "250px" }}
                  />
                </div>
              </EuiCard>
            </EuiFlexItem>
          </EuiFlexItem>
        </EuiFlexGrid>
      </EuiFlexGroup>
    </ConduitPage>
  );
};

export default Home;
