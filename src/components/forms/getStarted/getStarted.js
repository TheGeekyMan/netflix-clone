import React from "react";
import styles from './getStarted.module.scss';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const GetStarted = () => {
    return (
        <div className={styles.formContainer}>
            <div>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className={styles.input}
                >
                    <Form.Control type="email" placeholder="name@example.com" className={styles.formInput}/>
                </FloatingLabel>
            </div>
            <div>
                <button className={styles.getStartedBtn}>Get Started</button>
            </div>
        </div>
    )
}

export default GetStarted;