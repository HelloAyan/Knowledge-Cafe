import React from 'react';
import Styles from '../Menu/Menu.module.css'
import profileImg from '../../images/profile.png'

const Menu = () => {

    return (
        <>
            <div className={Styles.MainContainer}>
                <div className={Styles.knowledgeFont}>Knowledge Cafe</div>
                <div> <img src={profileImg} alt="" style={{ width: "60px", height: "60px", borderRadius: "50%" }} /> </div>
            </div>
            <hr />
        </>
    )
}

export default Menu;