import { useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { PostView } from "../components/PostView";

// const posts = [
//     {
//         user: "Zbigniew",
//         time: "12:30",
//         avatar: "download3.png",
//         postimage: "post.png",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia illo enim hic quas consequuntur minus pariatur consectetur? Culpa minima voluptates maiores molestiae error, neque at tempora deserunt sint repellendus?",

//     },
//     {
//         user: "Adam",
//         time: "14:30",
//         avatar: "star.png",
//         postimage: "post.png",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia illo enim hic quas consequuntur minus pariatur consectetur? Culpa minima voluptates maiores molestiae error, neque at tempora deserunt sint repellendus?",

//     },
//     {
//         user: "Ewa",
//         time: "1:30",
//         avatar: "chip.png",
//         postimage: "post.png",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia illo enim hic quas consequuntur minus pariatur consectetur? Culpa minima voluptates maiores molestiae error, neque at tempora deserunt sint repellendus?",

//     },
//     {
//         user: "Józek",
//         time: "6:30",
//         avatar: "download2.png",
//         postimage: "post.png",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia illo enim hic quas consequuntur minus pariatur consectetur? Culpa minima voluptates maiores molestiae error, neque at tempora deserunt sint repellendus?",

//     },
//     {
//         user: "Julia",
//         time: "12:10",
//         avatar: "download1.png",
//         postimage: "post.png",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia illo enim hic quas consequuntur minus pariatur consectetur? Culpa minima voluptates maiores molestiae error, neque at tempora deserunt sint repellendus?",
//     },

// ]

export const Home = () => {

    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/posts.json?key=6d1737e0")
            .then((response) => response.json())
            .then((posts) => setPosts(posts));
    }, []);

    console.log("posts from Home component:", posts)

    const updatedPosts = posts?.map((post) => {
        return ({
            ...post,
            postimage: `https://picsum.photos/id/${post.id}/800/400`,
        });
    });

    return (
        <Layout>
            <div className="main-content right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        <div className="row feed-body">
                            <div className="col-xl-8 col-xxl-9 col-lg-8">
                                {updatedPosts &&
                                    updatedPosts.length > 0 &&
                                    updatedPosts.map((post) =>
                                        <PostView {...post} key={post.user} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};