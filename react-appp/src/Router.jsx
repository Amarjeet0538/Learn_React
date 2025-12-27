import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage";
import App from "./components/Pages/App" ;
import ErrorPage from "./components/Pages/ErrorPage";

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