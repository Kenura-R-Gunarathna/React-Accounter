/* Loading atomic components */
import Logo from '../atoms/Logo';

export default function Brand() {
    return (
        <a href="/" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <Logo />
            {process.env.REACT_APP_NAME}
        </a>
    );
};