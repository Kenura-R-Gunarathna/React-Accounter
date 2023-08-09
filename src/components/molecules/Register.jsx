import { useState } from 'react';

/* Loading atomic components */
import Label from '../atoms/Label';
import CheckBox from '../atoms/CheckBox';
import HyperLink from '../atoms/HyperLink';
import EmailField from '../atoms/EmailField';
import PasswordField from '../atoms/PasswordField';
import PrimaryButton from '../atoms/PrimaryButton';
import ConfirmPasswordField from '../atoms/ConfirmPasswordField';

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [terms, setTerms] = useState(false);

    return (
        <>
            <div>

                <Label htmlFor="email" text="Your email" />
                <EmailField
                    name="email"
                    id="emai"
                    required="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

            </div>

            <div>

                <Label htmlFor="password" text="Password" />
                <PasswordField name="password" id="password" required="true" value={password} />

            </div>

            <div>

                <Label htmlFor="confirm-password" text="Confirm password" />
                <ConfirmPasswordField name="confirm-password" id="confirm-password" required="true" value={passwordConfirmation} />

            </div>

            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <CheckBox name="terms" ariaDescribedBy="terms" id="terms" required="true" value={terms} />
                </div>
                <div className="ml-3 text-sm hover:cursor-pointer">
                    <Label htmlFor="terms" text="I accept the Terms and Conditions" />
                </div>
            </div>

            <PrimaryButton type="submit" text="Sign up" />

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?&nbsp;

                <HyperLink link="true" href="/login" text="Login here" />

            </p>
            {email}
        </>
    );
};