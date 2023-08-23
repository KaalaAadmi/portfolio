import "./App.css";
import React, { useEffect, useState } from "react";
import Windows from "./screens/windows";
import Apple from "./screens/apple";
import { isMacOs } from "react-device-detect";

const App = () => {
	const [mode, setMode] = useState("windows"); // Initial mode is windows

  const toggleMode = () => {
    setMode(mode === "windows" ? "apple" : "windows");
  };

	
	useEffect(() => {
		console.log(isMacOs);
		if(isMacOs) {
			setMode("apple");
		} else {	
			setMode("windows");
		}
	}, []);
	console.log(mode);
	return (
		<>
      {mode === "windows" ? (
        <Windows toggleMode={toggleMode} />
      ) : (
        <Apple toggleMode={toggleMode} />
      )}
    </>
	);
};

export default App;
