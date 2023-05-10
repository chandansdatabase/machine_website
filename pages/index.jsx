import About from "./component/About";
import Banner from "./component/Banner";
// import Blogs from "./component/Blogs";
import Footer from "./component/Footer";
import Header from "./component/Header";
// import Members from "./component/Members";
import Clients from "./component/Clients";
import Navbar from "./component/Navbar";
// import Partner from "./component/Partner";
// import Portfolio from "./component/Portfolio";
// import Price from "./component/Price";
import Services from "./component/Services";
// import Sidebar from "./component/Sidebar";
// import Testimonial from "./component/Testimonial";
// import Touch from "./component/Touch";
import Contact from "./component/Contact";


export default function Home() {
  return (
    <>
      <Header/>
      {
        false &&
        <div className="preloader">
          <div className="preloader-wave"></div>
        </div>
      }
      <Navbar/>

      {/* <Sidebar/> */}

      <Banner/>

      <Services/>

      <About/>

      {/* <Price/> */}

      {/* <Portfolio/> */}

      {/* <Members/> */}

      {/* <Testimonial/> */}

      {/* <Blogs/> */}

      <Clients/>
      <Contact/>

      {/* <Touch/> */}

    <Footer/>
  </>
  )
}
