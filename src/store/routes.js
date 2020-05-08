import App from "../App";
import Login from "../views/Login";
import Register from "../views/Register";
import Logout from "../views/Logout";
import City from "../views/City";
import AddTrip from "../views/AddTrip";

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
]

export default routes
