import { createContext, useContext, useState } from "react";

export const ScrollYContext = createContext(window.scrollY);
export const SetScrollYContext = createContext(() => {});

const ScrollYProvider = ({ children }) => {
	const [scrollTop, setScrollTop] = useState(ScrollYContext);

	return (
		<ScrollYContext.Provider value={scrollTop}>
			<SetScrollYContext.Provider value={(val) => setScrollTop(val)}>
				{children}
			</SetScrollYContext.Provider>
		</ScrollYContext.Provider>
	);
};

export const useScrollYContext = () => {
	return useContext(ScrollYContext);
};

export const useSetScrollYContext = () => {
	return useContext(SetScrollYContext);
};

export default ScrollYProvider;
