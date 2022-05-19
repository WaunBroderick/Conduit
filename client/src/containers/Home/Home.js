import React, { useState } from "react";
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

import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../../graphql/authentiation";

import { useSelector, useDispatch } from "react-redux";

export const Home = () => {
  const [value, onChange] = useState(new Date());
  const user = useSelector((state) => state.profile);
  console.log(user);
  const dispatch = useDispatch();
  const renderCourses = (id) => {
    const assignments = user.profile.assignments;
    return (
      <div>
        {assignments?.map((assignment) => (
          <div key={assignment._id}>
            <div className="titleRow">
              <EuiTitle>
                <h1>{assignment.course.name}</h1>
              </EuiTitle>
              <div>
                <EuiProgress
                  max={100}
                  size="m"
                  value={50}
                  color="mediumslateblue"
                  valueText={true}
                />
              </div>
            </div>
            <div>
              <h3>{assignment.name}</h3>
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
              {renderCourses()}
            </EuiCard>
          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexGrid gutterSize="l" style={{ padding: "12px" }}>
          <EuiFlexItem grow={false}>
            <EuiCard style={{ maxHeight: 200 }} title="calendar">
              <Calendar onChange={onChange} value={value} />
            </EuiCard>
            <EuiSpacer />
            <EuiFlexItem>
              <EuiCard title="Notifications">{}</EuiCard>
            </EuiFlexItem>
          </EuiFlexItem>
        </EuiFlexGrid>
      </EuiFlexGroup>
    </ConduitPage>
  );
};

export default Home;
