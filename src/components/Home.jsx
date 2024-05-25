export default function Home() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Panchawat Buranathamrong </h1>
                <p className="text-xl text-gray-700 mt-4">Software Engineer (Big Data) | Nonthaburi, Thailand</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
                    <ul className="mt-4 space-y-4">
                        <li>
                            <h3 className="text-xl font-semibold text-gray-700">Software Engineer (Big Data)</h3>
                            <p className="text-gray-600">Kasikorn Business Technology Group (KBTG) | August 2021 - Present</p>
                            <p className="text-gray-600 mt-2">Lead, developed, and supported machine learning models to forecast KBank ATM incidents using Python and XGBoost. Utilized historical data on ATM incidents and external factors such as hardware log and customers’ pattern to train models, achieving a 85% accuracy rate.</p>
                            <p className="text-gray-600 mt-2">Led the development and support of a PySpark application for analyzing KBank customer statements, leveraging Apache Spark's distributed computing capabilities to handle large volumes of data. Designed and implemented data processing pipelines using PySpark, Hadoop, and ImpalaSQL to extract, transform, and load data from various sources. Collaborated with stakeholders to present insights, identify requirement gaps, and recommend solutions for improving customer experience and increasing revenue.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-gray-700">Deep Learning Developer (part-time)</h3>
                            <p className="text-gray-600">Self-employed | August 2022 - January 2023</p>
                            <p className="text-gray-600 mt-2">Developed bone-fractures X-ray image detection model for Chulalongkorn hospital with professors and students (Dev Club) of Faculty of Computer Engineering and Faculty of Computer Science, Chulalongkorn University. Contributed knowledge sharing to the students. The topics include image segmentation, image classification, and image detection, all was demonstrated by TensorFlow and PyTorch.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-gray-700">Tutor/Lecturer (part-time)</h3>
                            <p className="text-gray-600">Self-employed | June 2018 - February 2022</p>
                            <p className="text-gray-600 mt-2">Taught programming in C/C++, Java, R, and Python and computer science topics including data structures and algorithms, machine learning and deep learning, object-oriented-programming and web development to high-school and undergraduate students. Lectured undergraduate students about machine learning and deep learning in a workshop session (1-2 hour(s) per semester) at department of Computer Science, Chulalongkorn University.</p>
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
                    <ul className="mt-4 space-y-4">
                        <li>
                            <h3 className="text-xl font-semibold text-gray-700">American Express - Default Prediction</h3>
                            <p className="text-gray-600 mt-2">Predicted whether a customer will default their credit card. Applied SVD techniques to reduce the dimension of the dataset, trained models using LightGBM and tuned their hyperparameters by Optuna.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-gray-700">H&M Personalized Fashion Recommendations</h3>
                            <p className="text-gray-600 mt-2">Predicted the customer's next buy using purchasing history and product data. Features were formed using aggregation and collaborative filtering techniques. The models ensemble LightGBM and XGBoost.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-gray-700">Feedback Prize - Evaluating Student Writing</h3>
                            <p className="text-gray-600 mt-2">Segmented texts and classify argumentative and rhetorical in student essays by ensembling fine-tuned HuggingFace pre-trained DeBERTa model for token prediction and LightGBM for sentence classification.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
