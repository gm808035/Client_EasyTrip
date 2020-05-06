import App from "../App";
import Login from "../views/Login";
import Register from "../views/Register";
import Logout from "../views/Logout";


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
]

export default routes
