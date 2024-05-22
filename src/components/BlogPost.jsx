import { useParams } from "react-router-dom";

const blogPosts = {
    1: {
        title: "Getting Started with React",
        content: `
            React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
            
            \`\`\`javascript
            import React from 'react';
            import ReactDOM from 'react-dom';

            function App() {
                return <h1>Hello, world!</h1>;
            }

            ReactDOM.render(<App />, document.getElementById('root'));
            \`\`\`
        `,
    },
    2: {
        title: "Understanding JavaScript Closures",
        content: `
            A closure is the combination of a function and the lexical environment within which that function was declared.
            
            \`\`\`javascript
            function makeCounter() {
                let count = 0;
                return function() {
                    count++;
                    return count;
                };
            }

            const counter = makeCounter();
            console.log(counter()); // 1
            console.log(counter()); // 2
            \`\`\`
        `,
    },
    3: {
        title: "Building a REST API with FastAPI",
        content: `
            FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.
            
            \`\`\`python
            from fastapi import FastAPI

            app = FastAPI()

            @app.get("/")
            def read_root():
                return {"Hello": "World"}
            \`\`\`
        `,
    },
};

export default function BlogPost() {
    const { id } = useParams();
    const blogPost = blogPosts[id];

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">{blogPost.title}</h1>
            <div className="prose">
                <pre className="bg-gray-200 p-2 rounded-md">{blogPost.content}</pre>
            </div>
        </div>
    );
}
