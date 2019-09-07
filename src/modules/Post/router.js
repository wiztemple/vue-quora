import PostPage from "./PostPage";
import Post from './components/Post.vue';


const postRoutes = [
  {
    path: "/post",
    component: PostPage,
    children: [
      {
        path: '/child',
        component: Post,
      }
    ]
  }
];

export default postRoutes;
