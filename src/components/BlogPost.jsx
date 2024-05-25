import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const blogPosts = {
    1: {
        title: "Getting Started with React",
        file: "/posts/post1.md",
    },
    2: {
        title: "Understanding JavaScript Closures",
        file: "/posts/post2.md",
    },
};

const MarkdownRenderers = {
    code({ language, value }) {
        return <SyntaxHighlighter style={materialDark} language={language} children={value} />;
    },
};

export default function BlogPost() {
    const { id } = useParams();
    const blogPost = blogPosts[id];
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(blogPost.file)
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, [id]);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">{blogPost.title}</h1>
            <div className="prose">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter style={materialDark} language={match[1]} PreTag="div" {...props}>
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
}
