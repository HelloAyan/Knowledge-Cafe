import React from 'react';
import Styles from "../Bookmark/Bookmark.module.css";

const Bookmark = () => {
    return (
        <div>
            <div className={Styles.totalTimeCountContainer}>
                Spent time on read : 177 min
            </div>
            <div className={Styles.bookMarkBlogContainer}>
                <div className={Styles.bookMarkText}>Bookmarked Blogs : 8</div>
            </div>
        </div>
    )
}

export default Bookmark;