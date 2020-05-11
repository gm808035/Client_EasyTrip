import App from "../App";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import Logout from "../views/Auth/Logout";
import City from "../views/Trip/City";
import AddTrip from "../views/Trip/AddTrip";
import ShowTrip from "../views/Trip/ShowTrip";

const routes = [
  {
    path: '/',
    name: 'home',
    component: App,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/cities',
    name: 'cities',
    component: City
  },
  {
    path: '/addTrip',
    name: 'addTrip',
    component: AddTrip,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/trips/:id',
    name: 'showTrip',
    component: ShowTrip,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/map',
    name: 'map',
    component: Map,
    meta: {
      requiresAuth: true
    }
  },

]

export default routes
