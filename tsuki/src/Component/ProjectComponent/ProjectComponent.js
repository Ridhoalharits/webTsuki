import "./ProjectComponent.css";
import React from "react";

function ProjectComponent() {
	return (
		<div>
			<div className="Project">
				<p className="Heading">PROJECTS</p>
				<div className="text-white">
					Our <span className="gradient">Best Project </span>That We Made
				</div>
				<p className="OurProductDesc">
					The products we're most proud of can be found here. Our team of
					designers, developers and engineers has created an incredible new
					lineup of high quality, innovative and convenient products.
				</p>
			</div>

			<div className="listProjectRow">
				<div className="photoBox1">
					<img src="/images/img1.png" />
				</div>
				<div className="listProjectCol">
					<div className="photoBox2">
						<img src="/images/img2.png" />
					</div>
					<div className="photoBox3">
						<img src="/images/img3.png" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectComponent;
