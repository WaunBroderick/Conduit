import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { EuiEmptyPrompt } from "@elastic/eui";
import { ConduitPage } from "../../styles/themes/GlobalComponents";

import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/NavBar/SideBar";
import RenderConformationForm from "../../components/Modules/ConformationForm/RenderConformationForm";

export default function Testing() {
  //Set user Profile
  const user = useSelector((state) => state.profile);

  const sampleTest = {
    type: "confirmatonForm",
    name: "Sample Conformation Form",
    description:
      "This is a conformation form designed to let a new employee know the requirements they have for not goofing up",
    material: {
      textBlurb: `<h1>HTML Ipsum Presents</h1>
				<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
				<h2>Header Level 2</h2>
				<ol>
				   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				   <li>Aliquam tincidunt mauris eu risus.</li>
				</ol>
				<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>
				<h3>Header Level 3</h3>
				<ul>
				   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				   <li>Aliquam tincidunt mauris eu risus.</li>
				</ul>
				<pre><code>
				#header h1 a {
				  display: block;
				  width: 300px;
				  height: 80px;
				}
				</code></pre>`,
    },
    approved: false,
  };

  return (
    <>
      <SideBar />
      <ConduitPage>
        <NavBar />
        <EuiEmptyPrompt title={<span>Testing Screen</span>} />
        <div>
          <ul></ul>
        </div>
        <h1>{user.profile.name}</h1>
        <RenderConformationForm content={sampleTest} />
      </ConduitPage>
    </>
  );
}
