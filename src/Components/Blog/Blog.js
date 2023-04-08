import React from 'react';
import Styles from '../Blog/Blog.module.css';
import redTimeIcon from "../../images/Vector.svg";

const Blog = ({ blogInfo }) => {

    const { id, author, title, image, coverImg, authorImg, readTime, publishDate } = blogInfo;

    return (
        <div style={{ paddingRight: '24px' }}>
            {blogInfo.map(blogs => (
                <div key={blogs.id}>
                    <div className={Styles.blogMainContainer}>
                        <div className={Styles.imageSection}> <img src={blogs.coverImg} alt={blogs.title} /> </div>
                        <div className={Styles.blogTitleContainer}>
                            <div className={Styles.authorSection}>
                                <div className={Styles.authorSectionLeft}>
                                    <div className={Styles.authorTitleSection}> <img src={blogs.authorImg} alt={blogs.title} /> </div>
                                    <div>
                                        <div className={Styles.authorTitleText}>{blogs.author} </div>
                                        <div className={Styles.publishDate}> {blogs.publishDate} </div>
                                    </div>
                                </div>
                                <div className={Styles.authorSectionRight}>
                                    <div className={Styles.minRedSection}>
                                        <div> {blogs.readTime} </div>
                                        <div> <img src={redTimeIcon} alt="" style={{ width: '15px', height: '15px' }} />  </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.blogTitleSection}>{blogs.title}</div>
                            <div className={Styles.tagSection}>
                                <div>#beginners</div>
                                <div>#programming</div>
                            </div>
                            <div className={Styles.markRedSection}> Mark as read</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Blog;