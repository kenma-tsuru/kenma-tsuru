import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BlogPost() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {data.map((item, index) => renderContent(item, index))}
        </div>
    );
}

function renderContent(item, index) {
    switch (item.type) {
        case "h1":
            return <h1 key={index} className="text-3xl font-bold mb-4">{item.content}</h1>;
        case "p":
            return <p key={index} className="mb-4 text-lg">{item.content}</p>;
        case "image":
            return <img key={index} src={item.src} alt={item.alt} className="mb-4 mx-auto" style={{ maxWidth: "100%", height: "auto" }} />;
        case "code":
            return (
                <SyntaxHighlighter
                    key={index}
                    language={item.language}
                    style={okaidia}
                    showLineNumbers
                    wrapLines={true}
                    customStyle={{ whiteSpace: "pre-wrap", overflowX: "auto" }}
                >
                    {item.content}
                </SyntaxHighlighter>
            );
        default:
            return null;
    }
}



export const data = [
    {
        type: "h1",
        content: "Getting Started with Python"
    },
    {
        type: "p",
        content: "Python is a versatile and popular programming language known for its simplicity and readability. In this tutorial, we will go over the basics to get you started."
    },
    {
        type: "image",
        src: "https://example.com/python-logo.png",
        alt: "Python Logo"
    },
    {
        type: "p",
        content: "The first thing you need to do is install Python on your machine. You can download the latest version from the official Python website."
    },
    {
        type: "code",
        language: "python",
        content: `print("Hello, World! This should be responsive. Hello, World! This should be responsive. Hello, World! This should be responsive. ")`
    },
    {
        type: "p",
        content: "The code above prints 'Hello, World!' to the console. This is the simplest Python program and is often used to introduce beginners to programming."
    }
];

