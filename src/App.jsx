import { Outlet } from "react-router";
import useAllPosts from "./hooks/useAllPosts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const { allPosts, error, loading } = useAllPosts();

  return (
    <>
      <Navbar />
      <h1>Mr Mine Blog API</h1>
      {/* home or post */}
      <Outlet context={[allPosts, error, loading]} />
      <Footer />
    </>
  );
}

// compenent static, state, proptype, css, tests/snapshot

export default App;
