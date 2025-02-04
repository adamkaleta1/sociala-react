import { Layout } from "../components/layout/Layout";
import { PostView } from "../components/PostView";

export const Home = () => (
    <Layout>
        <div className="main-content right-chat-active">
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
                    <div className="row feed-body">
                        <div className="col-xl-8 col-xxl-9 col-lg-8">
                            <PostView user="Zbigniew" time="12:30" avatar="download1.png" />
                            <PostView user="Adam" time="12:42" avatar="star.png" />
                            <PostView user="Ewa" time="16:30" avatar="chip.png" />
                            <PostView user="Józek" time="14:30" avatar="avatar.jpg" />
                            <PostView user="Julia" time="2:30" avatar="avatar.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);