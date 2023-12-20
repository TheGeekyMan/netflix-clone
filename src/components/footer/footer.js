import React from "react";
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <p>Questions? Call 000-800-919-1694</p>
            <div className={styles.footerCols}>
                <div>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </div>
                <div>
                    <li>Help Centre</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                </div>
                <div>
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    {/* <li>Corporate Information</li> */}
                    <li>Only on Netflix</li>
                </div>
                <div>
                    <li>Media Centre</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                </div>
            </div>
        </div>
    )
}

export default Footer;