import { motion } from "framer-motion";

import Backdrop from "./Backdrop";

import React from "react";
import calendar from "../../assets/calendar.png";
import reactLogo from "../../assets/react.jpg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import pdf from "../../assets/pdf.png";
import resume from "../../assets/Arnav+Bhattacharya+Resume.pdf";
import picture from "../../assets/image.png";
import DesktopIcons from "./desktopIcons";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import StartDivider from "./Divider";

const StartMenu = ({
	handleClose,
	text,
	classname,
	showProjects,
	setShowProjects,
	setShowStart,
}) => {
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
	const desktopIcons = [
		{
			cn: "projects",
			src: reactLogo,
			shortcut: false,
			title: "Projects",
			onclick: () => (showProjects ? closeProjects() : openProjects()),
		},
		{
			cn: "resume",
			src: pdf,
			shortcut: false,
			title: "Resume",
			link: resume,
			download: true,
		},
		{
			cn: "github",
			src: github,
			shortcut: false,
			title: "Github",
			link: "https://www.github.com/KaalaAadmi",
		},
		{
			cn: "linkedin",
			src: linkedin,
			shortcut: false,
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/arnav-bhattacharya-002631282/",
		},
		{
			cn: "calendar",
			src: calendar,
			shortcut: false,
			title: "Calendar",
		},
	];
	const closeProjects = () => {
		setShowProjects(false);
	};
	const openProjects = () => {
		setShowProjects(true);
		setShowStart(false);
	};
	const [showDetails, setShowDetails] = React.useState(false);
	// const [hover, setHover] = React.useState({call:false,email:false,website:false});

	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className={`modal ${classname}`}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "baseline",
						padding: "10px",
					}}
				>
					{desktopIcons.map((icon, index) => {
						return (
							<DesktopIcons
								key={index}
								classname={icon.cn}
								source={icon.src}
								shortcutPresent={icon.shortcut}
								title={icon.title}
								onclick={icon.onclick}
								link={icon.link}
								download={icon.download}
								isStartMenu={true}
							/>
						);
					})}
				</div>

				{showDetails && (
					<div
						style={{
							color: "white",
							display: "flex",
							fontSize: "14px",
							width: "90%",
							paddingBottom: "20px",
							paddingLeft: "20px",
							// paddingRight: "60px",
						}}
					>
						<div style={{ width: "40%", paddingBottom: "10px" }}>
							<div>Phone</div>
							<StartDivider />
							<div>Email</div>
							<StartDivider />
							<div>Website</div>
							<StartDivider />
							<div>Experience</div>
							<StartDivider />

							<div>Skills</div>
						</div>
						<div style={{ width: "60%" }}>
							{/* <div style={{ display: "flex", justifyContent: "space-evenly" }} > */}
							<div>+353 83 123 0609</div>

							{/* </div> */}
							<StartDivider />
							<div>bhattaar@tcd.ie</div>
							<StartDivider />
							<div>https://ab.com/</div>
							<StartDivider />
							<div>2+ years</div>
							<StartDivider />
							<div>
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
					</div>
				)}
				<div
					onClick={() => setShowDetails(!showDetails)}
					style={{
						display: "flex",
						flexDirection: "row",
						background: "rgba(0,0,0,0.5)",
						// width: "100%",
						// height: "100%",
						padding: "10px",
						left: "0",
						right: "0",
						borderBottomLeftRadius: "12px",
						borderBottomRightRadius: "12px",
						alignContent: "center",
						// justifyContent: "space-evenly",
						cursor: "pointer",
					}}
				>
					{/* my image */}
					<div
						style={{ display: "flex", alignItems: "center", padding: "10px" }}
					>
						<img
							src={picture}
							alt="profile"
							style={{ height: "30px", width: "30px" }}
						/>
					</div>
					<div
						style={{ display: "flex", flexDirection: "column", color: "white" }}
					>
						<div style={{ fontSize: "14px", fontWeight: "bold" }}>
							Arnav Bhattacharya
						</div>
						<div style={{ fontSize: "12px" }}>Software Developer</div>
					</div>
					<div
						style={{
							width: "25%",
							right: 0,
							position: "absolute",
							textAlign: "right",
							// height:'100%',
							// height:'25%',
							display: "flex",
							alignItems: "center",
						}}
					>
						{/* arrow */}
						{showDetails ? (
							<div
								style={{
									display: "flex",
									justifyContent: "space-evenly",
									width: "100%",
									// height: "100%",
									right: 0,
									alignItems: "center",
								}}
							>
								<a
									href="tel:+3538312130609"
									target="_blank"
									rel="noreferrer"
									style={{ textDecoration: "none" }}
									data-tooltip-id="tooltip"
									data-tooltip-content="Call me"
									data-tooltip-place="bottom"
								>
									<MdOutlineCall size={18} style={{ color: "white" }} />
								</a>
								<a
									href="mailto:bhattaar@tcd.ie"
									target="_blank"
									rel="noreferrer"
									style={{ textDecoration: "none" }}
									data-tooltip-id="tooltip"
									data-tooltip-content="Send me an email"
									data-tooltip-place="bottom"
								>
									<MdOutlineEmail size={18} style={{ color: "white" }} />
								</a>
								<a
									href="https://arnav-bhattacharya-resume.vercel.app/"
									target="_blank"
									rel="noreferrer"
									style={{ textDecoration: "none" }}
									data-tooltip-id="tooltip"
									data-tooltip-content="Visit my website"
									data-tooltip-place="bottom"
								>
									<FaRegCompass size={18} style={{ color: "white" }} />
								</a>
							</div>
						) : (
							<div
								style={{
									color: "white",
									display: "flex",
									justifyContent: "space-evenly",
									alignItems: "center",
									width: "100%",
									// height: "100%",
									right: 0,
								}}
							>
								<IoIosArrowDown size={18} />
							</div>
						)}
					</div>
				</div>
			</motion.div>
		</Backdrop>
	);
};

export default StartMenu;
