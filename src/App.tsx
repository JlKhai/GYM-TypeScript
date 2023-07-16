import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import Home from "./components/home"
import Benefits from "./components/benefits"
import OurClasses from "./components/ourclasses"

export enum SeletedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}

function App() {
const [seletedPage, setSeletedPage] = useState<SeletedPage>(SeletedPage.Home)

const [isTopOfPage , setIsTopOfPage] = useState<boolean>(true)
useEffect(()=>{
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true)
      setSeletedPage(SeletedPage.Home)
    }
    if (window.scrollY !== 0) {
      setIsTopOfPage(false)      
    }
  }
  window.addEventListener("scroll",handleScroll)
  return ()=>window.removeEventListener("scroll", handleScroll)
},[])
  return (
    <div className="app">
      <Navbar isTopOfPage={isTopOfPage} seletedPage={seletedPage} setSeletedPage={setSeletedPage} />
      <Home setSeletedPage={setSeletedPage}/>
      <Benefits setSeletedPage={setSeletedPage}/>
      <OurClasses setSeletedPage={setSeletedPage}/>
    </div>
  )
}

export default App
