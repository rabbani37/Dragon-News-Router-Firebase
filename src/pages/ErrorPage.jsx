import { Link, useNavigate } from "react-router";


const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
                <h1 className="text-6xl font-bold text-red-500">404</h1>

                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-2 text-gray-600">
                    Sorry, the page you are looking for doesn't exist.
                </p>

                <Link
                    to={navigate('/')}
                    className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;