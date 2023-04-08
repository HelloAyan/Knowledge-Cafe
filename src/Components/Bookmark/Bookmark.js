import React from 'react';
import Styles from "../Bookmark/Bookmark.module.css";

const Bookmark = ({ blogInfo }) => {
    const { id, author, title, image, coverImg, authorImg, readTime, publishDate } = blogInfo;

    return (
        <div>
            <div className={Styles.totalTimeCountContainer}>
                Spent time on read : 177 min
            </div>
            <div className={Styles.bookMarkBlogContainer}>
                <div className={Styles.bookMarkText}>Bookmarked Blogs : 8</div>
                <div className={Styles.checkedItemsContainer}>
                    <div>Master Microsoft Power Platform and Become an In-Demand!</div>
                </div>
                <div className={Styles.checkedItemsContainer}>
                    <div>Master Microsoft Power Platform and Become an In-Demand!</div>
                </div>
                <div className={Styles.checkedItemsContainer}>
                    <div>Master Microsoft Power Platform and Become an In-Demand!</div>
                </div>
            </div>
        </div>
    )
}

export default Bookmark;