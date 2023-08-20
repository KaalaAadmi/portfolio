import "./App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Windows from "./screens/windows";
import Apple from "./screens/apple";
import { setOS } from "./redux/actions";

const App = () => {
	const os = useSelector((state) => state.os);
  const dispatch = useDispatch();

	const handleModeChange = (newMode) => {
    dispatch(setOS(newMode));
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
		dispatch(setOS(val));
	}
	useEffect(() => {
		getOS();
	}, []);
	console.log(os)
	return (
    <>
      {os === "ios" || os === "macos" ? (
        <Apple changeOS={handleModeChange} />
      ) : (
        <Windows changeOS={handleModeChange} />
      )}
    </>
  );
};

export default App;
