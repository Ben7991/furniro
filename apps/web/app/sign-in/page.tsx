import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

import { AuthLayout } from '@/components/layouts/auth/AuthLayout';
import { LoginForm } from './page.partials';
import { FacebookIcon } from '@/components/atoms/icons/FacebookIcon';

export default function Login(): React.JSX.Element {
  return (
    <AuthLayout
      title="Sign-in to Furniro"
      subline="Welcome back. Let's pick up where you left off."
    >
      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className="flex items-center py-1 px-2 border border-gray-300 rounded-md"
        >
          <FcGoogle className="text-xl" />
          <p className="grow text-center">Sign up with Google</p>
        </Link>
        <Link
          href="/"
          className="flex items-center py-1 px-2 border border-gray-300 rounded-md"
        >
          <FacebookIcon />
          <p className="grow text-center">Sign up with Facebook</p>
        </Link>
      </div>
      <div className="relative my-7">
        <hr className="my-3 border-t-gray-300" />
        <small className="absolute bg-white p-3 inline-block -top-5 left-1/2 -translate-x-1/2">
          OR
        </small>
      </div>
      <LoginForm />
      <small className="text-center block mt-3">
        Don't have an account?{' '}
        <Link href="/sign-up" className="text-blue-700 hover:underline">
          Sign up
        </Link>
      </small>
    </AuthLayout>
  );
}
