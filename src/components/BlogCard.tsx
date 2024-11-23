import React from 'react';
import '../styles/BlogCard.css';

type BlogCardProps = {
    title: string;
    author: string;
    date: string;
    coverImage: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ title, author, date, coverImage }) => {
    return (
        <div className="blog-card">
            <img src={coverImage} alt={title} className="blog-cover" />
            <div className="blog-details">
                <h2>{title}</h2>
                <p>
                    <strong>{author}</strong> - {date}
                </p>
                <a href="#" className="read-more">Read More</a>
            </div>
        </div>
    );
};

export default BlogCard;
