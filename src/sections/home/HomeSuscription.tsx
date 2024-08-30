import SubscriptionForm from "../../components/SubscriptionForm";
import { useTranslation } from "react-i18next";

function HomeSuscription() {
    const { t } = useTranslation();

    return (
        <section className="suscription">
            <h1>{t("subscribe")}</h1>
            <SubscriptionForm />
        </section>
    );
}

export default HomeSuscription