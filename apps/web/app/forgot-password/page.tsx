import Link from 'next/link';

import { AuthLayout } from '@/components/layouts/auth/AuthLayout';
import { ForgotPasswordForm } from './page.partials';

export default function ForgotPassword(): React.JSX.Element {
  return (
    <AuthLayout
      title="Forgot password?"
      subline="We will send you a new password link to your email"
    >
      <ForgotPasswordForm />
      <small className="text-center block mt-3">
        Already have an account?{' '}
        <Link href="/sign-in" className="text-blue-700 hover:underline">
          Sign-in
        </Link>
      </small>
    </AuthLayout>
  );
}
