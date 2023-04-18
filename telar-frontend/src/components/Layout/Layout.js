import { NavBar } from "./Navbar/Navbar";
// import { Footer } from "./Footer/Footer";

export const Layout = (props)=>{

  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  )
}