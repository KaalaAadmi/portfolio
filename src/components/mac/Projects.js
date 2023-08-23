import { motion } from "framer-motion";

import Backdrop from "./Backdrop";

import React from "react";
import ProjectContainer from "./ProjectContainer";

import pdf from "../../assets/react.jpg";
import background from "../../assets/background.jpg";
import ProjectDetails from "./ProjectDetails";
import { MdClose } from "react-icons/md";

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
const Project = ({ handleClose }) => {
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
				className={`project_modal`}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				// style={{padding:'20px'}}
			>
				{/* <div > */}
				{selected === null ? (
					<>
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
									width: "53%",
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
							</div>
						</div>

						<div
							style={{
								color: "white",
								fontWeight: "bold",
								fontSize: 32,
								textAlign: "left",
								paddingLeft: "2rem",
								paddingTop: "2rem",
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
								padding: "2rem",
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gridColumnGap: "10px",
								gridRowGap: "50px",
							}}
						>
							{projectList.map((project, index) => {
								return (
									<div
										style={{ width: "100%" }}
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
									width: "100%",
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
										paddingRight: "1rem",
										color: "#007aff",
                    cursor:'pointer'
									}}
									onClick={() => setSelected(null)}
								>
									Back
								</div>
							</div>
						</div>

						{/* Make component */}
						<ProjectDetails
							data={projectList[selected]}
							handleClose={handleClose}
						/>
						{/* {projectList[selected].name} */}
						{/* <button onClick={() => setSelected(null)}>Back</button> */}
					</>
				)}
			</motion.div>
		</Backdrop>
	);
};

export default Project;
