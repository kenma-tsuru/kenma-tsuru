import { Link } from "react-router-dom";

export default function Blog() {
    const blogs = [
        { id: 1, title: "Getting Started with React", summary: "Learn the basics of React and how to create your first application." },
        { id: 2, title: "Understanding JavaScript Closures", summary: "A deep dive into closures in JavaScript and how they work." },
    ];

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Blog</h1>
            {blogs.map((blog) => (
                <div key={blog.id} className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
                    <p className="text-lg text-gray-700">{blog.summary}</p>
                    <Link to={`/blog/${blog.id}`} className="text-blue-600 hover:underline">Read more</Link>
                </div>
            ))}
        </div>
    );
}
