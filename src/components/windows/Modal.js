import { motion } from "framer-motion";

import Backdrop from "./Backdrop";

import React from "react";
import ProjectContainer from "./ProjectContainer";

import { AiOutlineClose } from "react-icons/ai";
import pdf from "../../assets/react.jpg";
import background from "../../assets/background.jpg";
import { IoIosArrowBack } from "react-icons/io";
import ProjectDetails from "./ProjectDetails";

const projectList = [
	{
		name: "Test 1",
		icon: pdf,
		main: background,
		// icon: background,
		category: "Test",
		useBy: "Web",
		company: "Kaalu Tech",
		country: "IN",
		language: "EN",
		start: "Jan 2023",
		end: "Jan 2024",
		shortDesc: "This is a test project",
		longDesc:
			"This is a test project but this explanation is longer and has more details about the project. SO, this will ensure that the user or the person reading this understands what exactly happens in this application. Hope you understand things, if you don't then you are most definitely the stupidest individual who has ever existed on this planet and you should be ashamed of yourself and should also consider leaving this planet coz you suck ass.",
		role: "Software Developer",
		client: "KaalaAadmi",
		teamSize: 1,
		duration: "12 months",
		lang: "English",
		countries: "India and 10 More",
	},
	{
		name: "Test 2",
		icon: pdf,
		main: background,
		// icon: background,
		category: "Test",
		useBy: "Web",
		company: "Kaalu Tech",
		country: "IN",
		language: "EN",
		start: "Jan 2023",
		end: "Jan 2024",
		shortDesc: "This is a test project",
		longDesc:
			"This is a test project but this explanation is longer and has more details about the project. SO, this will ensure that the user or the person reading this understands what exactly happens in this application. Hope you understand things, if you don't then you are most definitely the stupidest individual who has ever existed on this planet and you should be ashamed of yourself and should also consider leaving this planet coz you suck ass.",
		role: "Software Developer",
		client: "KaalaAadmi",
		teamSize: 1,
		duration: "12 months",
		lang: "English",
		countries: "India and 10 More",
	},
];
const Modal = ({ handleClose, text, classname }) => {
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
	const [selected, setSelected] = React.useState(null);
	const handleSelected = (index) => {
		setSelected(index);
		console.log("first");
	};
	console.log(selected);
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className={`modal ${classname}`}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				// style={{padding:'20px'}}
			>
				{/* <div > */}
				{selected === null ? (
					<>
						<div className="taskBar">
							<div
								className="taskbar_icon"
								style={{
									height: "inherit",
									display: "flex",
									// justifyContent: "flex-end",
									alignItems: "center",
									width: "30px",
									position: "absolute",
									right: "0",
									top: "0",
								}}
							>
								<AiOutlineClose
									style={{ color: "white", cursor: "pointer" }}
									onClick={handleClose}
								/>
							</div>
						</div>

						<div
							style={{
								color: "white",
								fontWeight: "bold",
								fontSize: 32,
								textAlign: "left",
								paddingLeft: "2rem",
							}}
						>
							My Projects
						</div>
						{/* </div> */}
						<div
							style={{
								width: "93%",
								border: "0.05px solid #787b80",
								// marginRight: "10px",
								marginTop: "5px",
								marginBottom: "5px",
								borderRadius: "5px",
								marginLeft: "2rem",
							}}
						/>
						<div
							style={{
								// paddingLeft: "2rem",
								// paddingTop: "2rem",
								// paddingBottom: "2rem",
								padding:'2rem',
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gridColumnGap: "10px",
								gridRowGap: "50px",
							}}
						>
							{projectList.map((project, index) => {
								return (
									<div
										style={{width:'100%' }}
										onClick={() => handleSelected(index)}
									>
										<ProjectContainer
											key={index}
											name={project.name}
											icon={project.icon}
											main={project.main}
											category={project.category}
											useBy={project.useBy}
										/>
									</div>
								);
							})}
						</div>
					</>
				) : (
					<>
						<div className="taskBar">
							<div
								className="taskbar_icon"
								style={{
									height: "inherit",
									display: "flex",
									// justifyContent: "flex-end",
									alignItems: "center",
									justifyContent: "center",
									width: "30px",
									position: "absolute",
									left: "0",
									top: "0",
									paddingLeft: "5px",
								}}
							>
								<IoIosArrowBack
									style={{ color: "white", cursor: "pointer" }}
									onClick={() => setSelected(null)}
								/>
							</div>
							<div
								className="taskbar_icon"
								style={{
									height: "inherit",
									display: "flex",
									// justifyContent: "flex-end",
									alignItems: "center",
									width: "30px",
									position: "absolute",
									right: "0",
									top: "0",
								}}
							>
								<AiOutlineClose
									style={{ color: "white", cursor: "pointer" }}
									onClick={handleClose}
								/>
							</div>
						</div>
						{/* Make component */}
						<ProjectDetails data={projectList[selected]} />
						{/* {projectList[selected].name} */}
						{/* <button onClick={() => setSelected(null)}>Back</button> */}
					</>
				)}
			</motion.div>
		</Backdrop>
	);
};

export default Modal;
