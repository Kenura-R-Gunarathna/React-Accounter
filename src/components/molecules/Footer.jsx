import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mx-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <Link to="/" className="hover:underline">{process.env.REACT_APP_NAME}</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}