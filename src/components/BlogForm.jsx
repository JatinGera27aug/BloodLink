import React, {useState} from 'react'

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new blog post object
        const newPost = {
            title: title,
            content: content,
            author: author
        };
        // Add the new post to the list of blog posts
        setBlogPosts([...blogPosts, newPost]);
        // Clear input fields
        setTitle('');
        setContent('');
        setAuthor('');
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') setTitle(value);
        else if (name === 'content') setContent(value);
        else if (name === 'author') setAuthor(value);
    };

  return (
    <div className="max-w-md w-full max-h-[500px] p-4 border border-gray-300 rounded-md bg-red-50">
                <h2 className="text-3xl font-bold text-center mb-4">Write a Blog</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                        <input type="text" id="title" name="title" placeholder="Enter title" value={title} onChange={handleInputChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content:</label>
                        <textarea id="content" name="content" placeholder="Enter content" value={content} onChange={handleInputChange} required rows="4" className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author:</label>
                        <input type="text" id="author" name="author" placeholder="Enter author" value={author} onChange={handleInputChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className='w-full flex justify-end'>
                    <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring ">Submit</button>
                    </div>
                    
                </form>
            </div>
  )
}

export default BlogForm
