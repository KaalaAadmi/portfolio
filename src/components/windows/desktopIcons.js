import React from "react";
import shortcut from "../../assets/shortcut_arrow.png";

const DesktopIcons = ({
	link,
	classname,
	source,
	shortcutPresent,
	onclick,
	title,
  download,
	isStartMenu,
}) => {
	if (link) {
		return (
			<a
				href={link}
        {...download && download}
				target="_blank"
				rel="noreferrer"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					textDecoration: "none",
					color: "white",
					padding:isStartMenu? "10px": "20px",
					// gap:isStartMenu? "20px": "0px",
				}}
			>
				<div
					className={`${classname} desktop_icon`}
					style={{ position: "relative" }}
				>
					<img
						src={source}
						alt={classname}
						style={{
							height: "60px",
							width: "60px",
							position: "relative",
							top: 0,
							left: 0,
						}}
					/>
					{shortcutPresent && (
						<div
							classname="shortcut"
							style={{ position: "absolute", bottom: "0px", left: "0px" }}
						>
							<img
								src={shortcut}
								alt="shortcut"
								style={{ height: "15px", width: "15px" }}
							/>
						</div>
					)}
				</div>
				<div>{title}</div>
			</a>
		);
	} else {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					textDecoration: "none",
					color: "white",
					padding: "20px",
					marginTop: "20px",
					cursor: "pointer",
				}}
				// onClick={() => props.setOpenModal("default")}
				onClick={() => onclick(true)}
			>
				<div
					className={`${classname} desktop_icon`}
					style={{ position: "relative" }}
				>
					<img
						src={source}
						alt={classname}
						style={{
							height: "60px",
							width: "60px",
							position: "relative",
							top: 0,
							left: 0,
						}}
					/>
					{shortcutPresent && (
						<div
							classname="shortcut"
							style={{ position: "absolute", bottom: "0px", left: "0px" }}
						>
							<img
								src={shortcut}
								alt="shortcut"
								style={{ height: "15px", width: "15px" }}
							/>
						</div>
					)}
				</div>
				<div>{title}</div>
			</div>
		);
	}
};

export default DesktopIcons;
