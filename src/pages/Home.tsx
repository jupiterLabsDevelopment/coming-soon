import Header from "../components/Header";
import HomePresentation from "../sections/home/HomePresentation";
import HomeSuscription from "../sections/home/HomeSuscription";

function Home() {

    return (
        <section className="home">
            <Header />
            <HomePresentation />
            <HomeSuscription />
        </section>
    );
};

export default Home