import { Outlet } from "react-router";
import useAllPosts from "./hooks/useAllPosts";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import "./styles/button.css";
import "./styles/input.css";

function App() {
  const { allPosts, error, loading } = useAllPosts();

  return (
    <>
      <Navbar />
      <h1>Mr Mine Blog API</h1>
      <Outlet context={[allPosts, error, loading]} />
      <Footer />
    </>
  );
}

export default App;
