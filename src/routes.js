import AddPostsPage from "./components/AddPostsPage";
import GetPostsPage from "./components/GetPostsPage";
import DeletePostsPage from "./components/DeletePostsPage";

export default [
    {
        path: "/get",
        component: GetPostsPage,
    },
    {
        path: "/post",
        component: AddPostsPage,
    },
    {
        path: "/delete",
        component: DeletePostsPage,
    },
];
