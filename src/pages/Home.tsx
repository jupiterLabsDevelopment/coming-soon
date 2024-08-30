import Header from "../components/Header";
import HomePresentation from "../sections/home/HomePresentation";
import HomeSuscription from "../sections/home/HomeSuscription";
import Footer from "../components/Footer";

function Home() {

    return (
        <section className="home">
            <Header />
            <HomePresentation />
            <HomeSuscription />
            <Footer />
        </section>
    );
};

export default Home