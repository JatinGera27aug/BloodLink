import React, { useState } from 'react';
import BlogForm from '../components/BlogForm';

const Blog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [blogPosts, setBlogPosts] = useState([
        {
            title: 'My Journey as a Blood Donor',
            content: 'I started donating blood five years ago after my father was diagnosed with a rare blood disorder. Witnessing his struggle made me realize the importance of blood donation in saving lives. Since then, I have made it a regular habit to donate blood every three months. Each donation brings me a sense of fulfillment knowing that I am contributing to someone else\'s well-being.',
            author: 'John Doe'
        },
        {
            title: 'The Miracle of Blood Transfusion',
            content: 'Yesterday, I received a blood transfusion after a severe car accident. The experience was both terrifying and enlightening. As I lay in the hospital bed, weak and in pain, I couldn\'t help but marvel at the wonder of modern medicine. The blood I received was like liquid gold, restoring my strength and vitality. I am immensely grateful to the anonymous donors who selflessly gave their blood, allowing me to have a second chance at life.',
            author: 'Jane Smith'
        }
    ]);

    return (
        <div className="grid grid-cols-2 gap-4 p-4 m-4"> {/* Grid layout with 2 columns */}
            <div>
                <h2 className="text-3xl font-bold text-center mb-4">Blog Posts</h2>
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white border border-red-950 shadow-md p-4 rounded-md mb-4">
                        <h3 className="text-xl font-semibold">{post.title}</h3>
                        <p className="mt-2">{post.content}</p>
                        <p className="mt-2">Author: {post.author}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center">
                <BlogForm />
            </div>
        </div>
    );
};

export default Blog;
