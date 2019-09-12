import PostPage from "./PostPage";
import Posts from './components/Posts.vue';


const postRoutes = [
  {
    path: "/post",
    component: PostPage,
    children: [
      {
        path: '/posts',
        component: Posts,
      }
    ]
  }
];

export default postRoutes;
