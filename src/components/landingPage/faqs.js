import React from "react";
import styles from './landingPage.module.scss';
import { FAQS_LIST } from "../../constants/landingPage/landingPage";
import Accordion from 'react-bootstrap/Accordion';
import GetStarted from "../forms/getStarted/getStarted";

const FAQComponent = () => {
    return (
        <div className={styles.faqContainer}>
            <p className={styles.faqTitle}>Frequently Asked Questions</p>
            {FAQS_LIST.map((item, index) => {
                return (
                    <Accordion key={index} className={styles.customAccordion}>
                        <Accordion.Item eventKey={index} className={styles.customAccordionItem}>
                            <Accordion.Header className={styles.customAccordionHeader}>{item.question}</Accordion.Header>
                            <Accordion.Body style={{color:'white', backgroundColor:'dimgray'}}>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )
            })}
            <p className={styles.subTitle}>Ready to watch? Enter your email to create or restart your membership.</p>
            <GetStarted />
        </div>
    )
}

export default FAQComponent;