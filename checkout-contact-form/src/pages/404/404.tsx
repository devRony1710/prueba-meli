import { Navbar } from "@/components/navbar/navbar";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/button/button";

export const NotFound = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <section>
            <Navbar />
            <div style={{padding: '2rem'}}>
                <h1>404</h1>
                <p>{t('pageNotFound')}</p>
                <Button label={t('backToHome')} onClick={() => navigate('/')} />
            </div>
        </section>
    );
};