import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { MdClose, MdEmail, MdOutlineCall } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import Divider from "./Divider";
import { Tooltip } from "react-tooltip";

const Contact = ({ handleClose,about }) => {
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
				className={`contact_modal`}
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
							Contact
						</div>
					</div>
				</div>
				{/* Content */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "flex-end",
						width: "100%",
						height: "100%",
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
						<div
							style={{
								display: "flex",
								width: "30%",
								justifyContent: "flex-end",
							}}
						>
							<img
								src={require("../../assets/image.png")}
								alt="my face"
								style={{ height: "4rem", width: "4rem" }}
							/>
						</div>
						<div
							style={{
								display: "flex",
								paddingLeft: "1rem",
								flexDirection: "column",
							}}
						>
							<div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
								Arnav Bhattacharya
							</div>
							<div>Software Developer</div>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							width: "50%",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								padding: "1rem 0",
								justifyContent: "space-evenly",
								width: "100%",
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
								data-tooltip-id="tooltip"
								data-tooltip-content="Call me"
                data-tooltip-place="bottom"
							>
								<MdOutlineCall
									style={{
										backgroundColor: "#007aff",
										padding: ".5rem",
										borderRadius: "50%",
									}}
									size={20}
								/>
								<div style={{ color: "#007aff", fontSize: ".8rem" }}>call</div>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
								data-tooltip-id="tooltip"
								data-tooltip-content="Send me an email"
                data-tooltip-place="bottom"
							>
								<MdEmail
									style={{
										backgroundColor: "#007aff",
										padding: ".5rem",
										borderRadius: "50%",
									}}
									size={20}
								/>
								<div style={{ color: "#007aff", fontSize: ".8rem" }}>mail</div>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
								data-tooltip-id="tooltip"
								data-tooltip-content="Visit my website"
                data-tooltip-place="bottom"
							>
								<BsGlobe2
									style={{
										backgroundColor: "#007aff",
										padding: ".5rem",
										borderRadius: "50%",
									}}
									size={20}
								/>
								<div style={{ color: "#007aff", fontSize: ".8rem" }}>web</div>
							</div>
						</div>
					</div>
					<div
						style={{
							color: "white",
							display: "flex",
							fontSize: "14px",
							width: "90%",
							paddingTop: "1rem",
						}}
					>
						<div
							style={{
								width: "40%",
								textAlign: "right",
							}}
						>
							<div style={{ paddingRight: ".8rem" }}>Phone</div>
							<Divider />
							<div style={{ paddingRight: ".8rem" }}>Email</div>
							<Divider />
							<div style={{ paddingRight: ".8rem" }}>Website</div>
							{/* <Divider /> */}
						</div>
						<div style={{ width: "60%" }}>
							<div>
								<a
									href="tel:+353831230609"
									style={{ textDecoration: "none", color: "white" }}
								>
									+353 83 123 0609
								</a>
							</div>
							<Divider />
							<div>
								<a
									href="mailto:bhattaar@tcd.ie"
									style={{ textDecoration: "none", color: "white" }}
								>
									bhattaar@tcd.ie
								</a>
							</div>
							<Divider />
							<div>
								<a
									href="https://arnav-bhattacharya-resume.vercel.app/"
									style={{ textDecoration: "none", color: "white" }}
								>
									https://ab.com/
								</a>
							</div>
							{/* <Divider /> */}
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
								cursor: "pointer",
							}}
              onClick={about}
						>
							About Me
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
			</motion.div>
		</Backdrop>
	);
};

export default Contact;
