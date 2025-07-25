import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import store from "./store/store";

import App from "./components/App";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

console.log(store);

root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
