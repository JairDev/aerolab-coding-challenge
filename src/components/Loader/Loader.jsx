import "./Loader.css"

function Loader({dynamicClass}) {
  return (
    <span className={`loader ${dynamicClass}`}></span>
  )
}

export default Loader