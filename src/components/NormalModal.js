import { motion } from "framer-motion";

import React from "react";

import { MdLightbulb } from "react-icons/md";

const Modal = ({ change }) => {
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
		<div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className={`normal_modal`}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				// style={{padding:'20px'}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div style={{ color: "#fefefe" }}>
						<div style={{ display:'flex',alignItems:'center',fontWeight: "bold" }}>
							<MdLightbulb />
							<div>Did you know?</div>
						</div>
						<div><strong>Mobile</strong> view coming soon!</div>
					</div>
					<div onClick={change} className="ok_button" style={{color:'#007aff',cursor:'pointer',marginLeft:'1rem'}}>OK</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Modal;
