import React, { useState } from 'react';
import BlogCard from '../components/BlogCard'; // 博客卡片组件
import BlogDetail from '../components/BlogDetail'; // 博客详情组件
import '../styles/App.css'; // 全局样式
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 定义博客数据的类型
type Blog = {
    title: string;
    author: string;
    date: string;
    coverImage: string;
    contentImages: string[];
    content: string;
};

// 示例博客数据
const blogs: Blog[] = [
    {
        title: 'Welcome to My Blog',
        author: 'John Doe',
        date: '2024-11-23',
        coverImage: 'http://localhost:9000/bloomblog-images/%E6%88%AA%E5%B1%8F2024-11-23%2016.44.44.png',
        contentImages: ['http://localhost:9000/bloomblog-images/%E6%88%AA%E5%B1%8F2024-11-23%2016.44.44.png','http://localhost:9000/bloomblog-images/019349a7-5831-709c-8dc1-e7830c69bb44.jpg'],
        content: 'This is the content of the blog. It can be a long string or HTML.',
    },
];

const Home: React.FC = () => {
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null); // 管理选中的博客状态

    return (
        <div className="home">
            {/* 如果没有选中博客，显示博客列表 */}
            {!selectedBlog ? (
                <div className="blog-list">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedBlog(blog)} // 点击卡片切换到详情页
                        >
                            <BlogCard
                                title={blog.title}
                                author={blog.author}
                                date={blog.date}
                                coverImage={blog.coverImage}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                // 如果选中了博客，显示博客详情页
                <BlogDetail
                    title={selectedBlog.title}
                    author={selectedBlog.author}
                    date={selectedBlog.date}
                    contentImages={selectedBlog.contentImages}
                    content={selectedBlog.content}
                />
            )}
        </div>
    );
};

export default Home;
