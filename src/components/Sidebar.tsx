import React from 'react';
import '../styles/Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <section>
                <h3>Popular Posts</h3>
                <ul>
                    <li>Understanding React Hooks</li>
                    <li>How to Build a Blog</li>
                    <li>TypeScript vs JavaScript</li>
                </ul>
            </section>
            <section>
                <h3>Tags</h3>
                <div className="tags">
                    <span>#React</span>
                    <span>#JavaScript</span>
                    <span>#WebDev</span>
                </div>
            </section>
        </aside>
    );
};

export default Sidebar;
