import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SingleBlogPage from "./pages/SingleBlogPage.tsx";

export const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />
			},
			{
				path: "blog",
				children: [
					{
						index: true,
						element: <BlogPage />
					},
					{
						path: ":postId",
						element: <SingleBlogPage />
					}
				]
			}
		]
	},
	{
		path: "/dashboard",
		element: <DashboardLayout />,
		children: [
			{
				index: true,
				element: <DashboardPage />
			},
			{
				path: "statistics",
				element: <div>Statistics Page</div>
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
		<ToastContainer
			position="bottom-right"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable={false}
			pauseOnHover
			theme="light"
		/>
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
);
