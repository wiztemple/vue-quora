import Authentication from "./AuthenticationPage.vue";
import Register from './components/Register';
import Login from './components/Login';

const authRoutes = [
  {
    path: "/authentication",
    component: Authentication,
    children: [
      {
        path: 'register',
        component: Register,

      },
      {
        path: 'login',
        component: Login,

      },
    ]
  }
];

export default authRoutes;
