import React, { useState } from "react";

import { EuiFieldPassword,  EuiForm, EuiFormRow, EuiFieldText, EuiSpacer, EuiButton, EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

import '@elastic/eui/dist/eui_theme_light.css';



export default function Register(){
    const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };


    function renderForm(){
        return(
            <div>
                <h1>Helllo</h1>
            </div>
        )
    }

    return(
        <div style={{

        }}>
            <EuiFlexGroup justifyContent="spaceAround" >
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
                                
                                <EuiForm>
                                    <EuiFormRow label='Organization Name'>
                                        <EuiFieldText name="organization"/>
                                    </EuiFormRow>

                                    <EuiFormRow label='Email Address'>
                                        <EuiFieldText name="Email"/>
                                    </EuiFormRow>

                                    <EuiFormRow  label='Create Password'>
                                    <EuiFieldPassword
                                        placeholder="Placeholder text"
                                        value={value}
                                        onChange={onChange}
                                        type="dual"
                                        />
                                    </EuiFormRow>

                                    <EuiFormRow  label='Confirm Password'>
                                    <EuiFieldPassword
                                        placeholder="Placeholder text"
                                        value={value}
                                        onChange={onChange}
                                        type="dual"
                                        />
                                    </EuiFormRow>

                                    <EuiSpacer />

                                    <EuiButton type="submit" fill>
                                    Sign-Up
                                    </EuiButton>

                                </EuiForm>

                            </EuiCard>
                </EuiFlexItem>
            </EuiFlexGroup>
        </div>
    )
}