import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const About = ({ handleClose,project,contact }) => {
	const dropIn = {
		hidden: {
			y: "-100vh",
			opacity: 0,
		},
		visible: {
			y: "0",
			opacity: 1,
			transition: {
				duration: 0.1,
				type: "spring",
				damping: 100,
				stiffness: 500,
			},
		},
		exit: {
			y: "100vh",
			opacity: 0,
		},
	};
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className={`about_modal`}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
			>
				{/* taskbar */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						top: 0,
						left: 0,
						position: "absolute",
						height: "2rem",
						width: "100%",
						borderTopLeftRadius: "12px",
						borderTopRightRadius: "12px",
						background: "rgba(0,0,0,0.25",
					}}
				>
					<div
						style={{
							width: "57%",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<div style={{ display: "flex", paddingLeft: "1rem" }}>
							<div className="icon_background close" onClick={handleClose}>
								<MdClose className="close_icon" size={12} />
							</div>
							<div className="icon_background"></div>
							<div className="icon_background"></div>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								fontWeight: "bold",
							}}
						>
							About Me
						</div>
					</div>
				</div>
				{/* Content */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							width: "100%",
						}}
					>
						<img
							src={require("../../assets/image.png")}
							alt="my face"
							style={{
								height: "6.5rem",
								width: "6.5rem",
								paddingTop: "1.5rem",
								paddingBottom: "1.5rem",
							}}
						/>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							paddingBottom: "1rem",
						}}
					>
						<div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
							Arnav Bhattacharya
						</div>
						<div>Software Developer</div>
					</div>
					<div style={{ display: "flex", width: "90%" }}>
						<div
							style={{
								width: "40%",
								paddingBottom: "10px",
								textAlign: "right",
								paddingRight: "1rem",
								fontSize: ".8rem",
							}}
						>
							<div>Experience</div>
							<div>Skills</div>
						</div>
						<div style={{ width: "60%", fontSize: ".8rem", color: "#dfdfdf" }}>
							<div>2+ years</div>
							<ul style={{ listStyle: "none", padding: "0px", margin: 0 }}>
								<li>React, Next</li>
								<li>UI/UX</li>
								<li>JavaScript, TypeScript</li>
								<li>NodeJS, Express, Ionic</li>
								<li>MongoDB, Firebase</li>
								<li>HTML, CSS, CI/CD, REST, Git</li>
							</ul>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							padding: "1rem 1rem 0 1rem ",
							fontSize: "0.9rem",
							width: "50%",
							justifyContent: "space-evenly",
							alignItems: "center",
						}}
					>
						<div
							style={{
								backgroundColor: "#756d66",
								borderRadius: ".25rem",
								padding: ".15rem .3rem",
								cursor:'pointer'
							}}
							onClick={project}
						>
							My Projects
						</div>
						<div
							style={{
								backgroundColor: "#756d66",
								borderRadius: ".25rem",
								padding: ".15rem .3rem",
								cursor:'pointer'
							}}
							onClick={contact}
						>
							Contact
						</div>
					</div>
				</div>
			</motion.div>
		</Backdrop>
	);
};

export default About;
