import React, { useEffect, useState } from "react";
import { LoopCircleLoading } from "react-loadingg";
import { Tooltip } from "react-tooltip";
// import Modal from "react-overlays/Modal";
import { motion } from "framer-motion";

import styles from "./windows.css";
import calendar from "../assets/calendar.png";
import edge from "../assets/edge.png";
import email from "../assets/email.png";
import logo from "../assets/win11_logo.png";
import reactLogo from "../assets/react.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
// import shortcut from "../assets/shortcut_arrow.png";
import pdf from "../assets/pdf.png";
import resume from "../assets/Arnav+Bhattacharya+Resume.pdf";
import DesktopIcons from "../components/windows/desktopIcons";
import macosMode from "../assets/macos_mode.png";
import fullScreen from "../assets/fullscreen.png";
import normalScreen from "../assets/normal screen.png";
// import MenubarIcons from "../components/windows/menubarIcons";
import Modal from "../components/windows/Modal";
import StartMenu from "../components/windows/StartMenu";
import NormalModal from "../components/NormalModal";
import { format } from "date-fns";
import SplashScreen from "../components/windows/SplashScreen";

export default function Windows({ toggleMode, fullscreen }) {
	const [loading, setLoading] = React.useState(true);
	const [ip, setIp] = useState("");
	const [iconname, setIconname] = useState("");
	const [desc, setDesc] = useState("");
	const [temp, setTemp] = useState("");
	const [showProjects, setShowProjects] = useState(false);
	const [showStart, setShowStart] = useState(false);
	const [topModal, setTopModal] = useState(false);
	const desktopIcons = [
		{
			cn: "projects",
			src: reactLogo,
			shortcut: true,
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
			src: macosMode,
			shortcut: false,
			title: "macOS\nmode",
			onclick: toggleMode,
		},
	];
	const col2 = [
		{
			cn: "fullscreen",
			src: fullScreen,
			shortcut: false,
			title: "Fullscreen",
			onclick: fullscreen,
		},
	];
	const closeProjects = () => setShowProjects(false);
	const openProjects = () => setShowProjects(true);
	const closeStart = () => setShowStart(false);
	const openStart = () => setShowStart(true);
	const getIP = async () => {
		await fetch("https://api.ipify.org")
			.then((res) => res.text())
			.then((data) => setIp(data))
			.catch((err) => console.log(err));
	};
	const getWeather = async () => {
		await fetch(
			"https://api.weatherapi.com/v1/forecast.json?key=8320e00a27224e86af2155016233007&q=" +
				ip
		)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setDesc(data.current.condition.text);
				setTemp(data.current.temp_c);
				setIconname(data.current.condition.icon);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getIP();
		getWeather();
	}, [ip]);

	// console.log(time);
	React.useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	});
	useEffect(() => {
		setTimeout(() => setTopModal(!topModal), 2000);
	}, []);
	const toggleTopModal = () => {
		setTopModal(!topModal);
	};
	return (
		<>
			{loading === false ? (
				<div className="background" style={styles.background}>
					<div className="container" style={styles.container}>
						{/* Desktop Icons */}
						<div
							className="desktop_icons"
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								// gridTemplateColumns: "repeat(2, 1fr)",
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
							{/* {col2.map((icon, index) => {
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
							})} */}
						</div>
						<div className="menubar" style={styles.menubar}>
							{/* Left */}
							{/* Rain symbol */}
							{/* Temperature */}
							{/* Description */}
							<div className="left_side" style={styles.left_side}>
								<div className="rain_symbol" style={styles.rain_symbol}>
									<img
										src={require(`../assets/${iconname.split("/")[3]}/${
											iconname.split("/")[4]
										}/${iconname.split("/")[5]}/${iconname.split("/")[6]}`)}
										alt="weather symbol"
										style={{ height: "30px", width: "30px" }}
									/>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										height: "50px",
									}}
								>
									<div className="temperature" style={styles.temperature}>
										{Math.round(parseFloat(temp))}°C
									</div>
									{/* {weather && ( */}
									<div
										// style={styles.description}
										className="description"
										style={{ textTransform: "capitalize" }}
									>
										{desc}
									</div>
									{/* )} */}
								</div>
							</div>
							{/* Center */}
							<div className="center">
								{/* <MenubarIcons
									tooltipContent="Start Menu"
									classname="logo"
									source={logo}
								/> */}
								<motion.div
									className="logo menu_icon"
									data-tooltip-id="tooltip"
									data-tooltip-content="Start Menu"
									onClick={() => (showStart ? closeStart() : openStart())}
								>
									<img
										src={logo}
										alt="logo"
										style={{ height: "40px", width: "40px" }}
									/>
								</motion.div>
								<a
									href="https://arnav-bhattacharya-resume.vercel.app/"
									target="_blank"
									rel="noreferrer"
									data-tooltip-id="tooltip"
									data-tooltip-content="View my website"
								>
									<div className="edge menu_icon">
										<img
											src={edge}
											alt="edge"
											style={{ height: "40px", width: "40px" }}
										/>
									</div>
								</a>
								<motion.div
									className="react menu_icon"
									data-tooltip-id="tooltip"
									data-tooltip-content="View my projects"
									onClick={() =>
										showProjects ? closeProjects() : openProjects()
									}
								>
									<img
										src={reactLogo}
										alt="react"
										style={{ height: "40px", width: "40px" }}
									/>
								</motion.div>
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
											style={{ height: "40px", width: "40px" }}
										/>
									</div>
								</a>
								<a
									href="https://calendly.com/arnav-bhattacharya"
									target="_blank"
									rel="noreferrer"
									data-tooltip-id="tooltip"
									data-tooltip-content="Let's connect"
								>
									<div className="calendar menu_icon">
										<img
											src={calendar}
											alt="calendar"
											style={{ height: "40px", width: "40px" }}
										/>
									</div>
								</a>
							</div>
							{/* Right */}
							<div className="right_side">
								<div className="lang">ENG</div>
								<div
									className="datetime"
									style={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										height: "50px",
									}}
								>
									<div className="time">{format(new Date(), "hh:mm a")}</div>
									<div className="date">{format(new Date(), "dd/MM/yyyy")}</div>
								</div>
							</div>
						</div>
					</div>
					{showProjects && (
						// <AnimatePresence
						// 	initial={false}
						// 	// exitBeforeEnter={true}
						// 	onExitComplete={() => null}
						// >
						<Modal
							modalOpen={showProjects}
							handleClose={closeProjects}
							classname="projects_menu"
						/>
						// </AnimatePresence>
					)}
					{showStart && (
						// <AnimatePresence initial={false} onExitComplete={() => null}>
						<StartMenu
							modalOpen={showStart}
							handleClose={closeStart}
							classname="start_menu"
							showProjects={showProjects}
							setShowProjects={setShowProjects}
							setShowStart={setShowStart}
						/>
						// </AnimatePresence>
					)}
					{/* <Tooltip id="tooltip" /> */}
					<Tooltip
						id="tooltip"
						style={{
							backgroundColor: `rgba( 19, 18, 18, 0.5 )`,
							border: "1px solid #333",
						}}
					/>
					{topModal && <NormalModal change={toggleTopModal} />}
				</div>
			) : (
				// <LoopCircleLoading />
				<SplashScreen />
			)}
		</>
	);
}
