import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

export default function Layout({children}) {
  return (
    <>
      <div className="mx-80">
        <Header />
        <NavBar />
      </div>
      <div className="">{children}</div>
      <Footer/>
    </>
  )
}