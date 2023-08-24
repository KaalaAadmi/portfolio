import React from "react";

const SplashScreen = () => {
	return (
		<div
			style={{
				backgroundColor: "#111",
				height: "100vh",
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img
				src={require("../../assets/Windows.png")}
				alt="windows"
				style={{ height: "15%", width: "5%" }}
			/>
		</div>
	);
};

export default SplashScreen;
