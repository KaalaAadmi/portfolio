import "./App.css";
import React, { useEffect, useState } from "react";
import Windows from "./screens/windows";
import Apple from "./screens/apple";
import { isMacOs } from "react-device-detect";

const App = () => {
	const [mode, setMode] = useState("windows"); // Initial mode is windows
	const [fullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setFullscreen(!fullscreen);
  };

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
        <Windows toggleMode={toggleMode} fullscreen={toggleFullscreen}/>
      ) : (
        <Apple toggleMode={toggleMode} fullscreen={toggleFullscreen}/>
      )}
    </>
	);
};

export default App;
