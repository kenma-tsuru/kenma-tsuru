import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function BlogPost() {
    return (
        <div className="max-w-full px-2 mx-auto">
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
            return (
                <img
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    className="mb-4 w-full h-auto" 
                />
            );
        case "code":
            return (
                <div key={index} className=" mb-4 rounded-md bg-gray-800">
                    <SyntaxHighlighter
                        language={item.language}
                        style={docco}
                        showLineNumbers={true}
                        wrapLines={true}  // Enable line wrapping
                        lineNumberStyle={{ color: 'gray' }}
                        customStyle={{
                            padding: '1rem',
                            borderRadius: '0.5rem',
                        }}
                    >
                        {item.content}
                    </SyntaxHighlighter>
                </div>
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
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        alt: "Python Logo"
    },
    {
        type: "p",
        content: "The first thing you need to do is install Python on your machine. You can download the latest version from the official Python website."
    },
    {
        type: "p",
        content: "The code above prints 'Hello, World!' to the console. This is the simplest Python program and is often used to introduce beginners to programming."
    },
    {
        type: "code",
        language: "javascript",
        content: `import SyntaxHighlighter from 'react-syntax-highlighter';
        import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
        const Component = () => {
          const codeString = '(num) => num + 1';
          return (
            <SyntaxHighlighter language="javascript" style={docco}>
              {codeString}
            </SyntaxHighlighter>
          );
        };`
    }
];
