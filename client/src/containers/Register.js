import React, { useState } from "react";

import { EuiFieldPassword, EuiFieldText, EuiSwitch } from '@elastic/eui';

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
        <div>
            <h1>Hello All</h1>
            <EuiFieldText
                placeholder="Placeholder text"
                value={value}
                onChange={(e) => onChange(e)}
                aria-label="Use aria labels when no actual label is in use"
            />
        </div>
    )
}