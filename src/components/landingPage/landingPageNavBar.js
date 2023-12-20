import React from "react";
import styles from './landingPage.module.scss';
import Logo from '../../assets/logo.png';
import { useNavigate  } from "react-router-dom";

const LandingPageNavBar = ()=> {

    const navigate = useNavigate ();

    const currentLocation = window.location.pathname;

    const handleNavigation =() => {
        navigate("/");
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    return(
        <div className={styles.landingPageNavBarContainer}>
            <div onClick={()=>handleNavigation()}>
                <img src={Logo} alt='netflix-logo' width={150}/>
            </div>
            {currentLocation !== '/login' && <div>
                <button className={styles.lang}>English</button>
                <button className={styles.signInBtn} onClick={()=>navigateLogin()}>Sign In</button>
            </div>}
        </div>
    )
}

export default LandingPageNavBar;