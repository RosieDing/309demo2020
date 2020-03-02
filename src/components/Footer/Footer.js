import React from 'react';

import "./Footer.css";

function Footer(){
    return (
    <div id="Footer">
        <img id="Logo_Square" src={ require('./static/Asset_Logo\ S.png')} />
		
		<div id="About_Us_Sub">
			<div className="Subtitle" id="Footer_Title"> Lorem ipsum </div>
			<div id="Footer_Text"> Lorem ipsum dolor sit amet,
				consetetur sadipscing elitr, sed diam nonumy eirmod tempor
			</div>
		</div>

		<span className="Subliner"> </span>
		
		<div id="Footer_Text_Second"> Lorem ipsum dolor sit amet,
			consetetur sadipscing elitr, sed diam nonumy eirmod temport
		</div>

		<span className="Subliner"> </span>

		<span className="Picture_Footer"> </span>
    </div>   
	);
}

export default Footer