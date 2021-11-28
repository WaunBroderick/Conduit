import React, { useState, SyntheticEvent } from "react";
import { Route, Link, Redirect } from 'react-router-dom';

import { EuiFieldPassword, EuiText,  EuiForm, EuiFormRow, EuiFieldText, EuiSpacer, EuiButton, EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

import { StyledSection }from './style'

import '@elastic/eui/dist/eui_theme_light.css';



export default function Register(){
    const [value, setValue] = useState('');
    const [showErrors, setShowErrors] = useState(true);

    //Registration Information
    const [name, setName] = useState('');
    const [organization, setOrganization] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [orgId, setOrgId] = useState('');
    const [redirect, setRedirect] = useState(false);



    const onChange = (e) => {
        setValue(e.target.value);
    };

    const submit = async (e) => {
        e.preventDefault();

        var userData = {

        }

        const responeUser = await fetch(
            'http://localhost:5000/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name,
                    email,
                    organization,
                    password,
                })
            });
        const responseOrg = await fetch(
            'http://localhost:5000/organizations', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name,
                    address: "",
                    logo: "",
                })
            }).then(response=>response.json())
            .then(json=>{
                console.log('pared json', json)
            });
            console.log(responseOrg)
        setRedirect(true);
    }

    if (redirect){
        return <Redirect to="signin"/>;
    }
    


    let errors;

    if (showErrors) {
        errors = [
        "Here's an example of an error",
        'You might have more than one error, so pass an array.',
        ];
    }


    function renderForm(){
        return(
            <div>
                <h1>Helllo</h1>
            </div>
        )
    }

    return(

        <StyledSection>
            <EuiFlexGroup justifyContent="spaceAround"  alignItems="center">
                <EuiFlexItem grow={false}>
                            <EuiCard
                            icon={<EuiIcon size="s" type="dashboardApp" />}
                            title="Register Your Organization"
                            description="Example of a card's description. Stick to one or two sentences."
                            betaBadgeProps={{
                                label: 'Sign Up',
                                tooltipContent:
                                  'Fill out the inforamtion below and click Sign Up to create your Conduit Account.',
                              }}
                            onClick={() => {}}
                            >
                                
                                <EuiForm onSubmit={submit}>
                                    <EuiFormRow label='Organization Name'>
                                        <EuiFieldText name="organization"
                                        onChange={(e) => setOrganization(e.target.value)}
                                        />
                                    </EuiFormRow>

                                    <EuiFormRow label='Email Address'>
                                        <EuiFieldText name="Email"
                                         onChange={(e) => setEmail(e.target.value)}

                                        />
                                    </EuiFormRow>

                                    <EuiFormRow label='Personal Name'>
                                        <EuiFieldText name="Name"
                                         onChange={(e) => setName(e.target.value)}

                                        />
                                    </EuiFormRow>

                                    <EuiFormRow  label='Create Password'>
                                    <EuiFieldPassword
                                        placeholder="Placeholder text"
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="dual"
                                        />
                                    </EuiFormRow>

                                    <EuiFormRow  label='Confirm Password'>
                                    <EuiFieldPassword
                                        placeholder="Placeholder text"
                                        type="dual"
                                        />
                                    </EuiFormRow>

                                    <EuiSpacer />

                                    <EuiButton type="submit" fill onClick={submit}>
                                    Sign-Up
                                    </EuiButton>

                                </EuiForm>

                                <EuiSpacer />
                                
                                <EuiText>
                                    <p>
                                        If you already have an account please <Link to="/signin">Sign-In</Link>.
                                    </p>
                                </EuiText>

                            </EuiCard>
                </EuiFlexItem>
            </EuiFlexGroup>
        </StyledSection>      
    )
}