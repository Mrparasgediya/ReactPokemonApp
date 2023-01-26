import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
};

export default Home;
