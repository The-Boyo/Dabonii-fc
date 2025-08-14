import { useState } from "react";

export const useModal = () => {
	const [isPortalOpen, setPortal] = useState(false);
	const [thePlayerName, setPlayerName] = useState({
		name: "",
		generalPosition: "",
		specificPosition: "",
	});

	if (isPortalOpen) {
		document.querySelector("body").style.overflowY = "hidden";
	} else {
		document.querySelector("body").style.overflowY = "scroll";
	}

	return [isPortalOpen, setPortal, thePlayerName, setPlayerName];
};
