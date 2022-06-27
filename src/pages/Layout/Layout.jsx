import { useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import "./Layout.css"

function Layout({children}) {
  // useEffect(() => {
  //   // console.log("effect")
  // })
  return (
    <div className="container">
      <NavBar/>
      {/* {navBar} */}
      {children}
    </div>
  )
}

export default Layout