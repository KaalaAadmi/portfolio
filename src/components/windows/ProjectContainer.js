import React from "react";

const ProjectContainer = ({ name, icon, main, category, useBy}) => {
	return (
		<div style={{display:'flex',flexDirection:'column',width:'100%'}}>
			<div style={{ display: "flex", flexDirection: "row",paddingBottom:'2rem' }}>
				<div style={{ borderRadius: "12px" }}>
					<img
						src={icon}
						alt={name}
						style={{ height: "60px", width: "60px" }}
					/>
				</div>
				<div style={{ paddingLeft: "1rem", textAlign: "left",color: "white" }}>
					<div style={{ fontWeight: "bold" }}>{name}</div>
					<div>{category}</div>
					<div>Designed for {useBy}</div>
				</div>
			</div>
			<div>
				<img
					src={main}
					alt={name}
					style={{ width: "100%", borderRadius: "12px" }}
				/>
			</div>
		</div>
	);
};

export default ProjectContainer;
