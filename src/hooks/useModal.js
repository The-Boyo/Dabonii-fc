import { useState } from "react";
import { useScrollYContext } from "../contexts/ScrollYContext";

export const useModal = () => {
	const [isPortalOpen, setPortal] = useState(false);
	const [thePlayerName, setPlayerName] = useState({
		name: "",
		generalPosition: "",
		specificPosition: "",
	});

	const scrolledHeight = useScrollYContext();

	if (isPortalOpen) {
		document.querySelector("body").style.overflowY = "hidden";
		if (document.querySelector(".modal-cont")) {
			document.querySelector(".modal-cont").style.top = `${scrolledHeight}px`;
		}
	} else {
		document.querySelector("body").style.overflowY = "scroll";
	}

	return [isPortalOpen, setPortal, thePlayerName, setPlayerName];
};
