import "./App.css";
import React, { useEffect, useState } from "react";
import Windows from "./screens/windows";
import Apple from "./screens/apple";
import { LoopCircleLoading } from "react-loadingg";
import { isMacOs } from "react-device-detect";
import { is } from "date-fns/locale";
const App = () => {
	const [mode, setMode] = useState("windows"); // Initial mode is windows

  const toggleMode = () => {
    setMode(mode === "windows" ? "apple" : "windows");
  };

	function getOS() {
		let userAgent = window.navigator.userAgent.toLowerCase(),
			macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
			windowsPlatforms = /(win32|win64|windows|wince)/i,
			iosPlatforms = /(iphone|ipad|ipod)/i,
			val = null;
		if (macosPlatforms.test(userAgent)) {
			val = "macos";
		} else if (iosPlatforms.test(userAgent)) {
			val = "ios";
		} else if (windowsPlatforms.test(userAgent)) {
			val = "windows";
		} else if (/android/.test(userAgent)) {
			val = "android";
		} else if (!val && /linux/.test(userAgent)) {
			val = "linux";
		}
		setMode(val);
		// dispatch(setOS(val));
	}
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
