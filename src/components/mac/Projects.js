import { motion } from "framer-motion";

import Backdrop from "./Backdrop";

import React from "react";
import ProjectContainer from "./ProjectContainer";

import ProjectDetails from "./ProjectDetails";
import { MdClose } from "react-icons/md";

import wingman from "../../assets/wingman.png";
import smartPillow from "../../assets/smart_pillow.png";
import disastro from "../../assets/disastro.png";
import restaurantRating from "../../assets/restaurant_rating.png";
import eCommerce from "../../assets/eCommerce.png";
import videoStreaming from "../../assets/video_streaming.png";
import cookbook from "../../assets/cookbook.png";

import wingmanScreen from "../../assets/wingman_screen.png";
import restaurantScreen from "../../assets/restaurantScreen.png";
import disastroScreen from "../../assets/disastroScreen.png";
import smartPillowScreen from "../../assets/smartPillowScreen.png";
import eCommerceScreen from "../../assets/eCommerceScreen.png";
import videoScreen from "../../assets/videoScreen.gif";
import cookbookScreen from "../../assets/cookbookScreen.gif";

const projectList = [
	{
		name: "Dublin Restaurant Review Analysis",
		icon: restaurantRating, // You can replace this with an actual icon filename
		main: restaurantScreen,
		category: "Data Analysis",
		useBy: "Web",
		company: "Trinity College Dublin",
		country: "IE",
		language: "EN",
		start: "Sep 2022",
		end: "Dec 2022",
		shortDesc:
			"Predicted Dublin restaurant ratings on TripAdvisor with 85% accuracy.",
		longDesc:
			"Led a team in developing a machine learning algorithm to predict restaurant ratings on TripAdvisor in Dublin. Coordinated data preprocessing, feature engineering, and model evaluation, resulting in 85% prediction accuracy and a 30% reduction in training time.",
		role: "Project Lead",
		client: "Trinity College Dublin",
		teamSize: 4,
		duration: "4 months",
		lang: "English",
		countries: "Ireland",
	},
	{
		name: "Dublin Disaster Management System",
		icon: disastro, // You can replace this with an actual icon filename
		main: disastroScreen,
		category: "Emergency Response",
		useBy: "Web",
		company: "Trinity College Dublin",
		country: "IE",
		language: "EN",
		start: "Jan 2023",
		end: "May 2023",
		shortDesc:
			"Developed the 'Disastro' system to improve disaster response efficiency.",
		longDesc:
			"Initiated and led the development and deployment of the 'Disastro' system at Trinity College Dublin. Leveraged state-of-the-art technologies to reduce average response time by 30%, enabling authorities to detect and respond to threats more efficiently.",
		role: "Lead Developer",
		client: "Trinity College Dublin",
		teamSize: 3,
		duration: "5 months",
		lang: "English",
		countries: "Ireland",
	},
	{
		name: "Smart Pillow",
		icon: smartPillow, // You can replace this with an actual icon filename
		main: smartPillowScreen,
		category: "IoT",
		useBy: "Consumer",
		company: "Trinity College Dublin",
		country: "IE",
		language: "EN",
		start: "Feb 2023",
		end: "Jun 2023",
		shortDesc: "Collaborated on the development of an advanced smart pillow.",
		longDesc:
			"Contributed to the development of a cutting-edge smart pillow as part of a 4-member team. Integrated advanced hardware components such as ESP32, pressure sensor, microphone, and more to create an innovative product that offers enhanced user experience.",
		role: "Hardware Developer",
		client: "Trinity College Dublin",
		teamSize: 4,
		duration: "5 months",
		lang: "English",
		countries: "Ireland",
	},
	{
		name: "Wingman",
		icon: wingman, // You can replace this with an actual icon filename
		main: wingmanScreen,
		category: "Social",
		useBy: "Mobile",
		company: "Trinity College Dublin",
		country: "IE",
		language: "EN",
		start: "Mar 2023",
		end: "Aug 2023",
		shortDesc:
			"Developed 'Wingman' app with an adaptive algorithm for improved matches.",
		longDesc:
			"Constructed and deployed 'Wingman', a revolutionary dating application with an adaptive algorithm that increased match accuracy by 25%. Collaborated with cross-functional teams to optimize the app's interface and functionality, resulting in heightened user satisfaction.",
		role: "Lead Developer",
		client: "Trinity College Dublin",
		teamSize: 6,
		duration: "6 months",
		lang: "English",
		countries: "Ireland",
	},
	{
		name: "E-Commerce Web Application",
		icon: eCommerce, // You can replace this with an actual icon filename
		main: eCommerceScreen,
		category: "E-Commerce",
		useBy: "Web",
		company: "Personal Project",
		country: "IE",
		language: "EN",
		start: "May 2021",
		end: "Sep 2021",
		shortDesc:
			"Developed an innovative e-commerce web app using the MERN stack.",
		longDesc:
			"Pioneered the development and launch of an innovative e-commerce web application using the MERN stack. Achieved a 40% increase in user engagement, a 30% boost in sales revenue, and significant improvements in performance and database management.",
		role: "Full-Stack Developer",
		client: "Personal Project",
		teamSize: 1,
		duration: "5 months",
		lang: "English",
		countries: "Ireland",
	},
	{
		name: "Video Streaming Website",
		icon: videoStreaming, // You can replace this with an actual icon filename
		main: videoScreen,
		category: "Entertainment",
		useBy: "Web",
		company: "Personal Project",
		country: "IE",
		language: "EN",
		start: "Oct 2021",
		end: "Jan 2022",
		shortDesc:
			"Engineered a video streaming web app with a sophisticated recommendation system.",
		longDesc:
			"Engineered and deployed a cutting-edge video streaming web application with a visually stunning and intuitive user interface. Incorporated a sophisticated recommendation system that significantly enhanced user engagement and satisfaction.",
		role: "Full-Stack Developer",
		client: "Personal Project",
		teamSize: 1,
		duration: "4 months",
		lang: "English",
		countries: "Ireland",
	},
	{
		name: "Cook Book",
		icon: cookbook, // You can replace this with an actual icon filename
		main: cookbookScreen,
		category: "Food",
		useBy: "Web",
		company: "Personal Project",
		country: "IE",
		language: "EN",
		start: "Jul 2022",
		end: "Oct 2022",
		shortDesc:
			"Developed a feature-rich recipe storage platform with enhanced user experience.",
		longDesc:
			"Formulated and implemented a feature-rich recipe storage platform with a user-friendly interface, utilizing EJS, MongoDB, Express, and Bootstrap. Streamlined the database structure to enhance data retrieval speed by 40%, resulting in a seamless and optimized user experience.",
		role: "Full-Stack Developer",
		client: "Personal Project",
		teamSize: 1,
		duration: "4 months",
		lang: "English",
		countries: "Ireland",
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
