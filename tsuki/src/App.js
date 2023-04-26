import "./App.css";
import React from "react";
import ProjectComponent from "./Component/ProjectComponent/ProjectComponent";
import { OurService } from "./Component/OurService/OurService";
function App() {
	return (
		<div className="base">
			<OurService />
			<ProjectComponent />
		</div>
	);
}
export default App;
