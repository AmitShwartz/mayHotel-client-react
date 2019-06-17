import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import HomeView from "./views/HomeView/HomeView";
import Layout from "./components/Layout/Layout";
import RestaurantView from "./views/RestaurantView/RestaurantView";
import ServiceView from "./views/ServiceView/ServiceView";
import SpaView from "./views/SpaView/SpaView";
import EventsView from "./views/EventsView/EventsView";
import LoginView from "./views/LoginView/LoginView";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import SignUpView from "./views/SignUpView/SignUpView";
import LogoutView from "./views/LogoutView/LogoutView";
import AnonymousRoute from "./components/Routes/AnonymousRoute";
import OrdersView from "./views/RestaurantView/OrdersView";

const browserHistory = createBrowserHistory();

const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

const App = () => {
  return (
    <Router basename="/" history={history}>
      <Layout>
        <AnonymousRoute path="/login" component={LoginView} />
        <AnonymousRoute path="/signup" component={SignUpView} />
        <ProtectedRoute path="/" component={HomeView} exact />
        <ProtectedRoute path="/restaurant" component={RestaurantView} />
        <ProtectedRoute path="/orders" component={OrdersView} />
        <ProtectedRoute path="/room-service" component={ServiceView} />
        <ProtectedRoute path="/spa" component={SpaView} />
        <ProtectedRoute path="/events" component={EventsView} />
        <ProtectedRoute path="/logout" component={LogoutView} />
      </Layout>
    </Router>
  );
};

export default App;
