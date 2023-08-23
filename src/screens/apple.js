import React, { useState } from "react";
import { LoopCircleLoading } from "react-loadingg";
import { format } from "date-fns";
import styles from "./apple.css";
import { FaApple } from "react-icons/fa";
import reactLogo from "../assets/react.jpg";
import pdf from "../assets/pdf_apple.png";
import resume from "../assets/Arnav+Bhattacharya+Resume.pdf";
import github from "../assets/github_apple.png";
import linkedin from "../assets/linkedin_apple.png";
import safari from "../assets/safari_apple.png";
import email from "../assets/mail_apple.png";
import contact from "../assets/contacts_apple.png";
import DesktopIcons from "../components/mac/desktopIcons";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import About from "../components/mac/About";
import Contact from "../components/mac/Contact";
import Project from "../components/mac/Projects";// import { setOS } from "../redux/actions";

const Apple = ({ toggleMode }) => {
	const [loading, setLoading] = React.useState(true);
	const [showAbout, setShowAbout] = useState(false);
	const [showContact, setShowContact] = useState(false);
	const [showProjects, setShowProjects] = useState(false);
	React.useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	});
	const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);
	const handleSelectMenuItem = (item) => {
		setSelectedMenuItem(item);
		if (item === "about") {
			setShowAbout(true);
		} else if (item === "contact") {
			setShowContact(true);
		} else if (item === "project") {
			setShowProjects(true);
		} else {
			setSelectedMenuItem(null);
		}
	};
	const openAbout = () => {
		setShowContact(false);
		setShowAbout(true);
		setSelectedMenuItem("about");
	};
	const closeAbout = () => {
		closeContact();
		setSelectedMenuItem(null);
		setShowAbout(false);
	};
	const openContact = () => {
		setShowAbout(false);
		setShowContact(true);
		setSelectedMenuItem("contact");
	};
	const closeContact = () => {
		setSelectedMenuItem(null);
		setShowContact(false);
	};
	const openProject = () => {
		setShowAbout(false);
		setShowProjects(true);
		setSelectedMenuItem("project");
	};
	const closeProject = () => {
		setSelectedMenuItem(null);
		setShowProjects(false);
	};
	
	const desktopIcons = [
		{
			cn: "projects",
			src: reactLogo,
			shortcut: true,
			title: "Projects",
			onclick: () => (showProjects ? closeProject() : openProject()),
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
			shortcut: true,
			title: "Github",
			link: "https://www.github.com/KaalaAadmi",
		},
		{
			cn: "linkedin",
			src: linkedin,
			shortcut: true,
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/arnav-bhattacharya-002631282/",
		},
		{
			cn: "change_os",
			src: safari,
			shortcut: false,
			title: "Change OS",
			onclick: toggleMode,
		},
	];
	// console.log(os)
	return (
		<>
			{loading === false ? (
				<div className="background_apple" style={styles.background}>
					<div className="container" style={styles.container}>
						{/* Menubar */}
						<div className="apple_menubar" style={styles.menubar}>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									height: "100%",
									justifyContent: "space-evenly",
									width: "21%",
									fontSize: "14px",
									paddingLeft: "0.75%",
									color: "white",
								}}
							>
								<div>
									<FaApple size={18} />
								</div>
								<div style={{ fontWeight: "bold" }}>
									{selectedMenuItem === "about"
										? "About Me"
										: selectedMenuItem === "contact"
										? "Contact"
										: selectedMenuItem === "project"
										? "My Projects"
										: "Finder"}
								</div>
								<div
									onClick={() => handleSelectMenuItem("about")}
									style={{ cursor: "pointer" }}
								>
									About Me
								</div>
								<div
									onClick={() => handleSelectMenuItem("contact")}
									style={{ cursor: "pointer" }}
								>
									Contact
								</div>
								<div
									onClick={() => handleSelectMenuItem("project")}
									style={{ cursor: "pointer" }}
								>
									My Projects
								</div>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-evenly",
									width: "13%",
									color: "white",
									fontSize: "14px",
									fontWeight: "500",
								}}
							>
								<div
									style={{
										background: "white",
										borderRadius: "4px",
										fontWeight: "bold",
										color: "#757575",
										padding: "0 4px",
										fontSize: "12px",
									}}
								>
									EN
								</div>
								<div>{format(new Date(), "ccc, MMM dd h:mm a")}</div>
							</div>
						</div>
						{/* Desktop Icons */}
						<div
							className="desktop_icons"
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "flex-start",
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
									/>
								);
							})}
						</div>
						{/* Dock */}
						<div
							style={{
								width: "100vw",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<div className="dock_apple">
								<a
									href="https://arnav-bhattacharya-resume.vercel.app/"
									target="_blank"
									rel="noreferrer"
									data-tooltip-id="tooltip"
									data-tooltip-content="View my website"
								>
									<div className="edge menu_icon">
										<img
											src={safari}
											alt="edge"
											style={{ height: "50px", width: "50px" }}
										/>
									</div>
								</a>
								<a
									href="mailto:bhattaar@tcd.ie"
									// target="_blank"
									rel="noreferrer"
									data-tooltip-id="tooltip"
									data-tooltip-content="Send me an email"
								>
									<div className="email menu_icon">
										<img
											src={email}
											alt="email"
											style={{ height: "50px", width: "50px" }}
										/>
									</div>
								</a>
								<motion.div
									className="react menu_icon"
									data-tooltip-id="tooltip"
									data-tooltip-content="View my projects"
									onClick={() =>
										showProjects ? closeProject() : openProject()
									}
								>
									<img
										src={reactLogo}
										alt="react"
										style={{ height: "50px", width: "50px" }}
									/>
								</motion.div>
								<a
									href="https://calendly.com/arnav-bhattacharya"
									target="_blank"
									style={{
										height: "60%",
										textDecoration: "none",
										padding: "0 5px",
									}}
									data-tooltip-id="tooltip"
									data-tooltip-content="Let's connect"
								>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											height: "95%",
											borderRadius: "12px",
											width: "40px",
											// height: "40px",
											justifyContent: "center",
											alignItems: "center",
										}}
										className="menu_icon"
									>
										<div
											style={{
												textTransform: "uppercase",
												height: "30%",
												background: "#ef5350",
												color: "#fff",
												fontSize: "10px",
												width: "100%",
												borderTopLeftRadius: "8px",
												borderTopRightRadius: "8px",
												display: "flex",
												justifyContent: "center",
											}}
										>
											{format(new Date(), "MMM")}
										</div>
										<div
											style={{
												height: "70%",
												background: "#fff",
												width: "100%",
												borderBottomLeftRadius: "8px",
												borderBottomRightRadius: "8px",
												display: "flex",
												justifyContent: "center",
												fontSize: "22px",
											}}
										>
											{format(new Date(), "dd")}
										</div>
									</div>
								</a>
								<motion.div
									className="logo menu_icon"
									data-tooltip-id="tooltip"
									data-tooltip-content="Contact me"
									onClick={() => (showContact ? closeContact() : openContact())}
								>
									<img
										src={contact}
										alt="logo"
										style={{ height: "50px", width: "50px" }}
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<Tooltip
						id="tooltip"
						style={{
							backgroundColor: `rgba( 19, 18, 18, 0.5 )`,
							border: "1px solid #333",
						}}
					/>
					{showAbout && (
						<About
							handleClose={closeAbout}
							project={openProject}
							contact={openContact}
						/>
					)}
					{showContact && (
						<Contact handleClose={closeContact} about={openAbout} />
					)}
					{showProjects && <Project handleClose={closeProject} />}
				</div>
			) : (
				<LoopCircleLoading />
			)}
		</>
	);
};

export default Apple;
