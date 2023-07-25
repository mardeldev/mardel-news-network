import { Header, Navbar, NewsColumn } from './index';

const Home = ({ articles }) => {
    console.log(articles)
    return (
        <div>
            <Navbar />
            <Header />
            <NewsColumn articles={articles} />

            <p>{console.log(articles)}</p>
        </div>
    )
}

export default Home