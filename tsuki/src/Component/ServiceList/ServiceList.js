import React from "react";
import "./ServiceList.css";

function ServiceList(props) {
	return (
		<div className="gradient-box">
			<p className="content">{props.nama}</p>
		</div>
	);
}

export default ServiceList;
