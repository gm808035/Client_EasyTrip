import App from "../App";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import Logout from "../views/Auth/Logout";
import City from "../views/Trip/City";
import AddTrip from "../views/Trip/AddTrip";
import ShowTrip from "../views/Trip/ShowTrip";
import SearchTrip from "../views/Trip/SearchTrip";
import MyListTrip from "../views/Trip/MyListTrip";
import NotificationsMessage from "../views/NotificationsMessage";
import Profile from "../views/UserProfile/Profile";
import Car from "../views/UserProfile/Car";
import Preference from "../views/UserProfile/Preference";

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
    path: '/search',
    name: 'search',
    component: SearchTrip,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/showtrip',
    name: 'ShowTrip',
    component: ShowTrip,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/myTrips',
    name: 'myTrips',
    component: MyListTrip,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/notificationMessage',
    name: 'notification',
    component: NotificationsMessage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/car',
    name: 'car',
    component: Car,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/preference',
    name: 'preference',
    component: Preference,
    meta: {
      requiresAuth: true
    }
  },

]

export default routes
