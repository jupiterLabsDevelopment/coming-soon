import VideoPlayer from "../../components/VideoPlayer";
import { useTranslation } from "react-i18next";

function HomePresentation() {
    const { t } = useTranslation();

    return (
        <section className="presentation">
            <VideoPlayer url="/videos/jupiter-background.webm" />
            <div className="presentation-title">
                <h2>{t("upcomingLaunch")}</h2>
            </div>
        </section>
    );
}

export default HomePresentation