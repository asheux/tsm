import { render } from "react-dom";
import { Provider } from "react-redux";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import * as React from "react";
import "./main.css";
import AppRoutes from "./routes";
import configureAppStore from "./redux/store";
import initialState from "./redux/reducers/initialState";
import * as serviceWorker from "./serviceWorker";

// Bugsnag configuration
Bugsnag.start({
    apiKey: "c15c7aa9ea65a456bb72ae91b0ffd859", 
    plugins: [new BugsnagPluginReact()]
});
// get the provided error boundary
const ErrorBoundary = Bugsnag
    .getPlugin("react")
    .createErrorBoundary(React);

const store = configureAppStore(initialState);

// wrap your entire app tree in the ErrorBoundary component
const renderApp = () =>
    render(
        <ErrorBoundary>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </ErrorBoundary>,
        document.getElementById("root")
    );

if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./routes", renderApp);
}

renderApp();
serviceWorker.register();
