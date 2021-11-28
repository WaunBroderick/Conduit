import { EuiHeader, useEuiTheme, EuiAvatar, EuiHeaderSectionItemButton, EuiHeaderLogo } from '@elastic/eui';
import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [isFixed, setIsFixed] = useState(true);
    const { euiTheme } = useEuiTheme();



    return(
        <>
        <EuiHeader
        position={isFixed ? 'fixed' : 'static'}
        sections={[
            {
              items: [
                <EuiHeaderLogo iconType="logoElastic">Conduit</EuiHeaderLogo>,
              ],
              borders: 'none',
            },
            {
              items: [
                <EuiHeaderSectionItemButton aria-label="Account menu">
                  <EuiAvatar name="John Username" size="s" />
                </EuiHeaderSectionItemButton>,
                
              ],
              borders: 'none',
            },
          ]}
        />
        <EuiHeader 
        theme="default"
        position={isFixed ? 'fixed' : 'static'}
        size="xs"
        sections={[
            {
                items: [

                ]
            }
        ]}
        />
        </>
    )
}

export default NavBar;