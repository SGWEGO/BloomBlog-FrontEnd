import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/BlogDetail.css';

type BlogDetailProps = {
    title: string;
    author: string;
    date: string;
    contentImages: string[];
    content: string;
};

const BlogDetail: React.FC<BlogDetailProps> = ({
                                                   title,
                                                   author,
                                                   date,
                                                   contentImages,
                                                   content,
                                               }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <div className="blog-detail">
            {/* 头部区域：图片、标题和作者 */}
            <div className="blog-detail__header">
                {/* 图片区域 */}
                <div className="blog-detail__image">
                    <Slider {...settings}>
                        {contentImages.map((img, index) => (
                            <div key={index} className="carousel-slide">
                                <img src={img} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* 标题和作者区域 */}
                <div className="blog-detail__title-author">
                    <div className="title-author-container">
                        <h1 className="blog-title">{title}</h1>
                        <span className="blog-meta">
                            <strong>{author}</strong> - {date}
                        </span>
                    </div>
                </div>
            </div>
            {/* 内容区域 */}
            <div className="blog-content">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default BlogDetail;
