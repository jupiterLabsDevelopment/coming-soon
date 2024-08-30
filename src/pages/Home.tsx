import { useTranslation } from "react-i18next";

import Header from "../components/Header";

function Home() {
    const { t } = useTranslation();

    return (
        <section className="home">
            <Header />
            <div>
                <h2>{t("upcomingLaunch")}</h2>
                <p>{t("subscriptionInfo")}</p>
                <input type="email" placeholder={t("email")} />
                <button>{t("register")}</button>
            </div>
        </section>
    );
};

export default Home