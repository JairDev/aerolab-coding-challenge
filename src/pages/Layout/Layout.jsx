import NavBar from "../../components/NavBar/NavBar"
import "./Layout.css"

function Layout({children}) {
  return (
    <div className="container">
      <NavBar/>
      {children}
    </div>
  )
}

export default Layout