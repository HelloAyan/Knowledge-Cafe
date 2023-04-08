import React from 'react';
import Styles from "../Bookmark/Bookmark.module.css";

const Bookmark = ({ blogInfo }) => {
    const { id, author, title, image, coverImg, authorImg, readTime, publishDate } = blogInfo;

    return (
        <div>
            <div className={Styles.totalTimeCountContainer}>
                Spent time on read : 50 min
            </div>
            <div className={Styles.bookMarkBlogContainer}>
                <div className={Styles.bookMarkText}>Bookmarked Blogs : 4</div>
                {blogInfo.map(blogs => (
                    <div className={Styles.checkedItemsContainer} key={blogs.id}>
                        <div> {blogs.title}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Bookmark;