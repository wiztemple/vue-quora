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
        meta: {
          needsAuth: true,
        }
        // beforeEnter: ((to, from, next) => {
        //   if (to.matched.some(record => record.meta.requiresAuth)) {
        //     if ()
        //   }
        // })
      },
      {
        path: 'login',
        component: Login,

      },
    ]
  }
];

export default authRoutes;
