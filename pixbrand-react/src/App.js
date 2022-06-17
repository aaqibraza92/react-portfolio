import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import RouterList from "./Helpers/Routes/RoutesList";
import "./Helpers/Global/GCss";
import "./Assets/Themes/Themes.css";
import { Helmet } from "react-helmet";
import Img from "./Assets/Img/Img";
function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={Img.logo.default} />
      </Helmet>
      <div className="wrapperApp">
        <Switch>
          {RouterList.map((route, ind) => {
            return (
              <Route
                exact={ind === 0 ? true : false}
                key={ind}
                path={route.path}
              >
                {route.element}
              </Route>
            );
          })}
        </Switch>
      </div>
    </>
  );
}

export default App;
