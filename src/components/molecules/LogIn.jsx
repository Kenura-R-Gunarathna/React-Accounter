/* Loading atomic components */
import Label from '../atoms/Label';
import HyperLink from '../atoms/HyperLink';
import EmailField from '../atoms/EmailField';
import PasswordField from '../atoms/PasswordField';
import PrimaryButton from '../atoms/PrimaryButton';

export default function LogIn() {
    return (
        <>
            <div>

                <Label htmlFor="email" text="Your email" />
                <EmailField name="email" id="emai" required="true" />

            </div>

            <div>

                <Label htmlFor="password" text="Password" />
                <PasswordField name="password" id="password" required="true" />

            </div>

            <PrimaryButton type="submit" text="Log in" />

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?&nbsp;

                <HyperLink link="true" href="/register" text="Sign up" />

            </p>
        </>
    );
};