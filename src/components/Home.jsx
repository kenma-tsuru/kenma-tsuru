export default function Home() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-900">John Doe</h1>
                <p className="text-xl text-gray-700 mt-4">Full Stack Developer | Open Source Contributor</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
                    <ul className="mt-4 space-y-4">
                        <li>
                            <h3 className="text-xl font-semibold text-gray-700">Senior Software Engineer</h3>
                            <p className="text-gray-600">Tech Solutions Inc. | Jan 2020 - Present</p>
                            <p className="text-gray-600 mt-2">Developed scalable web applications and led a team of developers in agile methodologies.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-gray-700">Full Stack Developer</h3>
                            <p className="text-gray-600">Web Innovators | Jun 2016 - Dec 2019</p>
                            <p className="text-gray-600 mt-2">Designed and implemented end-to-end web solutions for clients across various industries.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-gray-700">Junior Developer</h3>
                            <p className="text-gray-600">Startup Hub | Jan 2014 - May 2016</p>
                            <p className="text-gray-600 mt-2">Assisted in the development of web applications and performed code reviews.</p>
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
                    <ul className="mt-4 space-y-4">
                        <li>
                            <h3 className="text-xl font-semibold text-gray-700">E-Commerce Platform</h3>
                            <p className="text-gray-600 mt-2">A full-featured e-commerce platform built with React, Node.js, and MongoDB.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-gray-700">Real-time Chat Application</h3>
                            <p className="text-gray-600 mt-2">A real-time chat application using WebSockets, Express, and React.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-gray-700">Personal Blog</h3>
                            <p className="text-gray-600 mt-2">A personal blog built with Jekyll and hosted on GitHub Pages.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
