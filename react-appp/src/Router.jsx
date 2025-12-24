import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";


const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
    errorElement: <ErrorPage/>  
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
]);

export default appRouter