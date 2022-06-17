import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import RoutesList from "./routes/RoutesList";
import "./helpers/Global/GCss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/Themes/Themes.css";
import OTPModal from "./components/Layout/OTPModal/OTPModal";
import Notifications, { notify } from "react-notify-toast";
import AlertModal from "./components/AlertModal/AlertModal";
import ModalTop from "./components/ModalTop/ModalTop";
import AlertModal02 from "./components/AlertModal02/AlertModal02";
import { useEffect } from "react";


function App() {
  function useScrollToTop() {
   
    const { pathname } = useLocation();
    console.log("pathname",pathname);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  useScrollToTop();

  return (
    <>
     
      <Notifications />
      <AlertModal />
      <AlertModal02 />
      <ModalTop />
      <OTPModal />
  
      <Routes>
     
        {RoutesList &&
          RoutesList.map((elem, ind) => {
            return <Route key={ind} path={elem.path} element={elem.element} />;
          })}
      </Routes>
      
    </>
  );
}

export default App;
