import { AuthLayout } from '@/components/layouts/auth/AuthLayout';
import { ResetPasswordForm } from './page.partials';

export default function ResetPassword(): React.JSX.Element {
  return (
    <AuthLayout title="Reset password" subline="Let's get your password reset">
      <ResetPasswordForm />
    </AuthLayout>
  );
}
