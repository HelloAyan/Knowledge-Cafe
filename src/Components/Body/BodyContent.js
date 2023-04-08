import React, { useState, useEffect } from 'react'
import Styles from '../Body/Body.module.css';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const BodyContent = () => {
    const [blogInfo, setBlogInfo] = useState([]);

    useEffect(() => {
        fetch('database.json')
            .then(res => res.json())
            .then(data => setBlogInfo(data));
    }, [])

    return (
        <div className={Styles.bodyMainContainer}>
            <div className={Styles.leftPart}>

                <Blog blogInfo={blogInfo} ></Blog>
            </div>
            <div className={Styles.rightPart}>
                <Bookmark blogInfo={blogInfo} />
            </div>
        </div>
    )
}

export default BodyContent;