import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRouteValidation from "./routes/privateRouteValidation";
import { routes } from "./routes/routeConfig";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const element = route.private ? (
              <PrivateRouteValidation>{route.element}</PrivateRouteValidation>
            ) : (
              route.element
            );
            return <Route key={index} path={route.path} element={element} />;
          })}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
