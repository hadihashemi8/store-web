import { useRoutes } from "react-router-dom"
import routes from "./router/router"
import './App.css'
import userInfos from "./context/context"
import { useEffect, useState } from "react"
import { SlArrowUp } from "react-icons/sl"
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  const routers = useRoutes(routes)
  const [isLogin, setIsLogin] = useState(true)
  const [showBackBtn, setShowBackBtn] = useState(false)


  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setShowBackBtn(true)
      } else if (window.scrollY == 0) {
        setShowBackBtn(false)
      }

    })
  }, [])


  const login = () => {
    setIsLogin(true)
  }

  const logOut = () => {
    setIsLogin(false)
  }





  return (

    <userInfos.Provider value={{ isLogin, login, logOut }}>
      {routers}

      {showBackBtn && (
        <div data-aos="fade-up-right" data-aos-duration="100" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} className='bg-gray-600 p-4  rounded-2xl text-white fixed top-[90%] left-5 cursor-pointer z-40'>
          <SlArrowUp />
        </div>
      )
      }
    </userInfos.Provider>
  )
}

export default App
