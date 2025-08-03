import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import store from "./store/store";

import App from "./components/App";
import { Provider } from "react-redux";
import { createPortal } from "react-dom";
import PlayerDetailsModal from "./components/modal/PlayerDetailsModal";

const root = createRoot(document.getElementById("root"));

export const portal = createPortal(
	<PlayerDetailsModal />,
	document.getElementById("modal")
);

root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
