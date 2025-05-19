import { createRoot } from "react-dom/client"
import "./index.css"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import MainContent from "./MainContent.jsx"
//using react component

function Main() {
  return (
    <>
      <Header /> {/* Calling react component */}
      <MainContent />
      <Footer />
    </>
  )
}

const root = createRoot(document.getElementById("root"));

const headerRoot = createRoot(document.getElementById("header"));
//dispaly the react component
root.render(
    <Main />
)