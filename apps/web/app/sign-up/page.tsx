import Link from 'next/link';

import { AuthLayout } from '@/components/layouts/auth/AuthLayout';
import { RegisterForm } from './page.partials';

export default function Register(): React.JSX.Element {
  return (
    <AuthLayout title="Sign-up to Furniro" subline="Let's get you set up">
      <RegisterForm />
      <small className="text-center block mt-3">
        Already have an account?{' '}
        <Link href="/sign-in" className="text-blue-700 hover:underline">
          Sign-in
        </Link>
      </small>
    </AuthLayout>
  );
}
