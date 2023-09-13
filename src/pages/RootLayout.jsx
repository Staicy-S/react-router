import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
