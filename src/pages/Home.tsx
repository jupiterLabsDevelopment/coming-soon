import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import HomePresentation from "../sections/home/HomePresentation";

function Home() {
    const { t } = useTranslation();

    return (
        <section className="home">
            <Header />
            <HomePresentation />
            <div>
                <p>{t("subscriptionInfo")}</p>
                <input type="email" placeholder={t("email")} />
                <button>{t("register")}</button>
            </div>
        </section>
    );
};

export default Home