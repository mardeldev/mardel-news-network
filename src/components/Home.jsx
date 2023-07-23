import { Header, Navbar, NewsColumn } from './index';
import { getNewsArticle } from "../dataService";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <NewsColumn />
        </div>
    )
}

export default Home