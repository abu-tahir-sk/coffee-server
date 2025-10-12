import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./UpdateCoffee.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Main from "./components/Main/Main.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () =>
          fetch("https://v1-coffee-store-server-inky.vercel.app/coffee"),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch("https://v1-coffee-store-server-inky.vercel.app/users"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://v1-coffee-store-server-inky.vercel.app/coffee/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
