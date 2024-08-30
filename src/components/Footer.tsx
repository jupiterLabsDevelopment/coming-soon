import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
        <p>Copyright © 2024 Jupiter Labs S.A. - {t("allRightsReserved")}</p>
        </footer>
    );
}

export default Footer;