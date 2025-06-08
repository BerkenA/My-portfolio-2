import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "../Home";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <Home/>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
