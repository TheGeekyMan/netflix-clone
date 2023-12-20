import React from "react";
import styles from './landingPage.module.scss';
import LandingPageNavBar from "./landingPageNavBar";
import GetStarted from "../forms/getStarted/getStarted";
import { SECTIONS_LIST } from "../../constants/landingPage/landingPage";
import FAQComponent from "./faqs";
import Footer from "../footer/footer";

const LandingPage = () => {
    return (
        <>
            <div className={styles.container}>
                <LandingPageNavBar />
                <div style={{ paddingTop: '10.93rem' }}>
                    <p className={styles.title}>Enjoy big movies, hit series and more from ₹ 149.</p>
                    <p className={styles.subTitle}>Join today. Cancel anytime.</p>
                    <p className={styles.subTitle1}>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <GetStarted />
            </div>
            {SECTIONS_LIST.map((item, index) => {
                return (
                    index % 2 === 0 ?
                        <div className={styles.sections} key={index}>
                            <div>
                                <p className={styles.sectionTitle}>{item.title}</p>
                                <p className={styles.sectionSubTitle}>{item.subTitle}</p>
                            </div>
                            <div>
                                <img src={item.logo} alt="" className={styles.sectionLogo} />
                            </div>
                        </div>
                        :
                        <div className={styles.sections} key={index}>
                            <div>
                                <img src={item.logo} alt="" className={styles.sectionLogo} />
                            </div>
                            <div>
                                <p className={styles.sectionTitle}>{item.title}</p>
                                <p className={styles.sectionSubTitle}>{item.subTitle}</p>
                            </div>
                        </div>
                )
            })}
            <FAQComponent />
            <Footer />
        </>
    )
}

export default LandingPage;