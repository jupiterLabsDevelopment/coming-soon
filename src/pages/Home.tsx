import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("jupiterLabs")}</h1>
            <h2>{t("upcomingLaunch")}</h2>
            <p>{t("subscriptionInfo")}</p>
            <input type="email" placeholder={t("email")} />
            <button>{t("register")}</button>
        </div>
    );
}

export default Home