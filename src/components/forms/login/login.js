import React from "react";
import styles from './login.module.scss';
import LandingPageNavBar from "../../landingPage/landingPageNavBar";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Footer from "../../footer/footer";

const Login = () => {

    const navigate = useNavigate()

    const navigateToLandingPage = () => {
        navigate('/');
    }
    return (
        <>

            <div className={styles.container}>
                <LandingPageNavBar />
                <div className={styles.loginForm}>
                    <p className={styles.signIn}>Sign In</p>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className={styles.input}
                    >
                        <Form.Control type="email" placeholder="name@example.com" className={styles.formInput} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className={styles.input}
                    >
                        <Form.Control type="password" placeholder="" className={styles.formInput} />
                    </FloatingLabel>

                    <button className={styles.signInBtn}>Sign In</button>
                    <div className={styles.paraContainer}>
                        <Form.Check
                            type="checkbox"
                            label="Remember me"
                            className={styles.customCheckbox}
                        />
                        <p className={styles.help}>Need help?</p>
                    </div>
                    <p className={styles.newToNetflix}>New to Netflix?
                        <span className={styles.signUp} onClick={() => navigateToLandingPage()}> Sign up now.</span>
                    </p>
                    <p className={styles.note}>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <span className={styles.learnMore}>Learn more.</span>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;