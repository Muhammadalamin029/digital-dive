import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AddBlog from "./pages/AddBlog";
import NotFound from "./pages/NotFound";
import ViewBlog from "./pages/ViewBlog";
import Blog from "./pages/Blog";
import { blogLoader } from "./pages/Blog";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Welcome from "./pages/Welcome";
import ProtectedRoute from "./ProtectedRoute";
import { Toaster } from "react-hot-toast";
import AuthProtectedRoute from "../src/AuthProtectedRoute";
import Practice from "./Practice";
import UserProfile, { generateUserDetails } from "./pages/UserProfile";
import ForgetPassword from "./pages/auth/ForgetPassword";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Practice />} path="/practice" />
        <Route element={<AuthProtectedRoute />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login/forget-password" element={<ForgetPassword />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="blogs" element={<BlogPage />} />
            <Route path="blogs/:id" element={<Blog />} loader={blogLoader} />
            <Route path="add-blog/" element={<AddBlog />} />
            <Route path="add-blog/view" element={<ViewBlog />} />
            <Route
              path="user"
              element={<UserProfile />}
              loader={generateUserDetails}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
