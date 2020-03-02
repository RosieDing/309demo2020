import React from 'react';
import "./Header.css";

function Header(){
    return (
        <div id="Header">
			<img id="Logo" src={ require('./static/Asset_Logo\ V.png')}></img>
			<div id="Header_Main">
				<span className="Header_Text"> Manage My Pets </span>
			    <span className="Header_Text"> Find My Match </span>
			    <span className="Header_Text"> Upgrade To VIP </span>
			    <span className="Header_Text"> Gallery </span>
			    <span className="Header_Text"> About Us </span>
			</div>
		</div>
       
	);
}

export default Header