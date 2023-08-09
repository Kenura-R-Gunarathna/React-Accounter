import { Form } from 'react-router-dom';

/* Loading utilities */
import useDocumentTitle from '../utils/useDocumentTitle';

/* Loading atomic components */
import Heading from '../components/atoms/Heading';

/* Loading molecular components */
import Brand from '../components/molecules/Brand';
import LogInSection from '../components/molecules/LogIn';

export default function LogIn() {

    useDocumentTitle('Log in to your account | ' + process.env.REACT_APP_NAME);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="mb-6">
                    <Brand />
                </div>

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <Heading text="Log in to your account" />

                        <Form className="space-y-4 md:space-y-6" action="#">

                            <LogInSection />

                        </Form>
                    </div>
                </div>
            </div>
        </section>

    );
};