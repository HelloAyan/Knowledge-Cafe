import React from 'react';
import Styles from '../Menu/Menu.module.css'
import menuPicture from '../../images/menu-profile.png';

const Menu = () => {
    return (
        <>
            <div className={Styles.MainContainer}>
                <div className={Styles.knowledgeFont}>Knowledge Cafe</div>
                <div><img src={menuPicture} alt="" /> </div>
            </div>
            <hr />
        </>
    )
}

export default Menu;