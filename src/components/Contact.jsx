export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
                <p className="text-gray-600 mt-4">Feel free to reach out to me through the following channels:</p>
                <ul className="mt-4 space-y-2">
                    <li className="text-gray-600">
                        <span className="font-semibold">Email:</span> john.doe@example.com
                    </li>
                    <li className="text-gray-600">
                        <span className="font-semibold">LinkedIn:</span> linkedin.com/in/johndoe
                    </li>
                    <li className="text-gray-600">
                        <span className="font-semibold">GitHub:</span> github.com/johndoe
                    </li>
                </ul>
            </div>
        </div>
    );
}
