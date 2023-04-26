import React from "react";
import "./OurService.css";
import ServiceList from "../ServiceList/ServiceList";

const services = [
	{ svc: "Website Development" },
	{ svc: "Internet Of Things" },
	{ svc: "Machine Learning" },
	{ svc: "Logo Design" },
	{ svc: "Graphic Design" },
	{ svc: " Videography" },
	{ svc: "Mobile Developing" },
	{ svc: "Photography" },
	{ svc: "Motion Graphic" },
];
export const OurService = () => {
	return (
		<div className="row-based">
			<div className="text-content">
				<p className="ServiceText">Services</p>
				<p className="text-white">
					Our <span className="gradient">Services</span>
				</p>
				<p className="body-copy">
					Every one of us loves something different. Some people may be drawn to
					offer convenience and simplicity, while others may prioritize features
					that allow for customization and personalization. So, explore the
					world through the lens of our visual capabilities and find what you
					love!
				</p>
				<div className="serviceList">
					{" "}
					{services.map((service) => (
						<ServiceList key={service.id} nama={service.svc} />
					))}
				</div>
			</div>
			<img
				className="serviceImg"
				src=".\images\service.png"
				alt="foto service"
			/>
		</div>
	);
};
