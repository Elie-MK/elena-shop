import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

function IndexLayout() {
  return (
    <>
    <NavBar />
      <Outlet />
    <Footer />
    </>
  )
}

export default IndexLayout