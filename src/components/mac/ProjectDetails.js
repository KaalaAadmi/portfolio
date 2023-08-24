import React from "react";
import StartDivider from "./Divider";
import { PiUserSquareFill } from "react-icons/pi";
import { MdWarning } from "react-icons/md";
import { GoBrowser } from "react-icons/go";
import { BsFillClipboardDataFill, BsGlobe } from "react-icons/bs";
import { BiMicrochip } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { MdVideogameAsset } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";

const ProjectDetails = ({ data, handleClose }) => {
	console.log(data);
	return (
		<div style={{ padding: "3rem 2rem 2rem 2rem", color: "#acacac" }}>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div>
					<img
						src={data.icon}
						alt="project"
						style={{
							height: "100px",
							width: "100px",
							borderRadius: "12px",
						}}
					/>
				</div>
				<div
					style={{
						textAlign: "left",
						paddingLeft: "1rem",
					}}
				>
					<div
						style={{
							fontWeight: "bold",
							textTransform: "capitalize",
							fontSize: "1.75rem",
							color: "#bdbdbd",
						}}
					>
						{data.name}
					</div>
					<div style={{ marginTop: ".75rem", fontSize: "1rem" }}>
						{data.category}
					</div>
					<div style={{ fontSize: ".8rem" }}>Designed for {data.useBy}</div>
				</div>
			</div>
			<StartDivider />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-evenly",
				}}
			>
				<div>
					<div
						style={{
							textTransform: "uppercase",
							fontWeight: "bold",
							fontSize: ".75rem",
						}}
					>
						company
					</div>
					{/* <div> */}
					<PiUserSquareFill size={40} />
					{/* </div> */}
					<div style={{ fontSize: ".8rem" }}>{data.company}</div>
				</div>
				<div style={{ borderLeft: "2px solid", height: "70px" }} />
				<div>
					<div
						style={{
							textTransform: "uppercase",
							fontWeight: "bold",
							fontSize: ".75rem",
						}}
					>
						country
					</div>
					<div style={{ fontSize: "32px", fontWeight: "bold" }}>
						{data.country}
					</div>
					<div style={{ fontSize: "0.8rem" }}>+10 more</div>
				</div>
				<div style={{ borderLeft: "2px solid", height: "70px" }} />
				<div>
					<div
						style={{
							textTransform: "uppercase",
							fontWeight: "bold",
							fontSize: ".75rem",
						}}
					>
						language
					</div>
					<div style={{ fontSize: "32px", fontWeight: "bold" }}>
						{data.language}
					</div>
					<div style={{ fontSize: "0.8rem" }}>English</div>
				</div>
				<div style={{ borderLeft: "2px solid", height: "70px" }} />
				<div>
					<div
						style={{
							textTransform: "uppercase",
							fontWeight: "bold",
							fontSize: ".75rem",
						}}
					>
						category
					</div>
					<div>
						{data.category === "Data Analysis" ? (
							<BsFillClipboardDataFill size={40} />
						) : data.category === "Emergency Response" ? (
							<MdWarning size={40} />
						) : data.category === "IoT" ? (
							<BiMicrochip size={40} />
						) : data.category === "Social" ? (
							<BsGlobe size={40} />
						) : data.category === "E-Commerce" ? (
							<FiShoppingCart size={40} />
						) : data.category === "Entertainment" ? (
							<MdVideogameAsset size={40} />
						) : data.category === "Food" ? (
							<IoFastFoodOutline size={40} />
						) : null}
					</div>
					<div style={{ fontSize: "0.8rem" }}>{data.category}</div>
				</div>
				<div style={{ borderLeft: "2px solid", height: "70px" }} />
				<div>
					<div
						style={{
							textTransform: "uppercase",
							fontWeight: "bold",
							fontSize: ".75rem",
						}}
					>
						platforms
					</div>
					<div>
						{data.useBy === "Web" ? (
							<GoBrowser size={40} />
						) : (
							<>
								<AiFillAndroid size={20} />
								<AiFillApple size={20} />
							</>
						)}
					</div>
					<div style={{ fontSize: "0.8rem" }}>Browser</div>
				</div>
			</div>
			<StartDivider />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "left",
					textAlign: "left",
				}}
			>
				<div
					style={{
						fontWeight: "bold",
						fontSize: "1.5rem",
						color: "#bdbdbd",
					}}
				>
					About this project
				</div>
				<div style={{ fontSize: "0.8rem" }}>
					{data.start} - {data.end}
				</div>
				<div style={{ fontSize: "0.95rem" }}>{data.shortDesc}</div>
			</div>
			<StartDivider />
			<div
				style={{
					textAlign: "left",
					fontSize: "0.85rem",
					color: "#bdbdbd",
				}}
			>
				{data.longDesc}
			</div>
			<StartDivider />
			<div
				style={{
					textAlign: "left",
					fontSize: "1.5rem",
					fontWeight: "bold",
					paddingBottom: ".9rem",
					color: "#bdbdbd",
				}}
			>
				Information
			</div>
			<div
				style={{
					width: "100%",
					textAlign: "left",
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gridGap: "1rem",
					// fontWeight:'bold'
				}}
			>
				<div>
					<div style={{ fontSize: ".8rem", fontWeight: "500" }}>Role</div>
					<div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
						{data.role}
					</div>
				</div>
				<div>
					<div style={{ fontSize: ".8rem", fontWeight: "500" }}>Client</div>
					<div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
						{data.client}
					</div>
				</div>
				<div>
					<div style={{ fontSize: ".8rem", fontWeight: "500" }}>Team Size</div>
					<div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
						{data.teamSize}
					</div>
				</div>
				<div>
					<div style={{ fontSize: ".8rem", fontWeight: "500" }}>Duration</div>
					<div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
						{data.duration}
					</div>
				</div>
				<div>
					<div style={{ fontSize: ".8rem", fontWeight: "500" }}>Language</div>
					<div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
						{data.lang}
					</div>
				</div>
				<div>
					<div style={{ fontSize: ".8rem", fontWeight: "500" }}>Countries</div>
					<div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
						{data.countries}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
