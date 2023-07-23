import { Header, Navbar, NewsColumn } from './index';

const Home = ({ articles }) => {
    console.log(articles)
    return (
        <div>
            <Navbar />
            <Header />
            <NewsColumn articles={articles} />
        </div>
    )
}

export default Home