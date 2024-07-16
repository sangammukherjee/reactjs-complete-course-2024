import { Link, useNavigate, useRoutes } from "react-router-dom";
import "./App.css";
import CommentsList from "./pages/comments";
import ReceipeList from "./pages/recipes";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";
import ReactHookFormExamplePage from "./pages/react-hook-form-example";
import Hooks from "./pages/hooks";
import UseCallbackExample from "./pages/use-callback-example";
import UseMemoExample from "./pages/use-memo-example";
import ReactQueryDemo from "./pages/react-query";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "recipe-list",
          element: <ReceipeList />,
        },
        { path: "comments-list", element: <CommentsList /> },
        { path: "recipe-list/:id", element: <RecipeDetailsPage /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/react-hook-form",
      element: <ReactHookFormExamplePage />,
    },
    {
      path: "/hooks",
      element: <Hooks />,
    },
    {
      path: "/callback",
      element: <UseCallbackExample />,
    },
    {
      path: "/memo",
      element: <UseMemoExample />,
    },
    {
      path: "/react-query-demo",
      element: <ReactQueryDemo />,
    },
  ]);

  return element;
}

function App() {
  const navigate = useNavigate();

  return (
    <div>
      {/* <h1>React routing, Custom hooks and more</h1>
      <div>
        <Link to={"/home/recipe-list"}>
          Alternative way of navigating to recipe list page
        </Link>
      </div>
      <button
        onClick={() => navigate("/home/recipe-list")}
        style={{ background: "black", color: "white" }}
      >
        Navigate to Recipe List page
      </button>
      <button
        onClick={() => navigate("/home/comments-list")}
        style={{ background: "black", color: "white" }}
      >
        Navigate to Comments List page
      </button> */}

      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe-list" element={<ReceipeList />} />
          <Route path="comments-list" element={<CommentsList />} />
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
      <CustomRoutes />
    </div>
  );
}

export default App;
