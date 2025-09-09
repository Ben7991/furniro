import { Button } from '@/components/atoms/button/Button';
import { FormControl, FormGroup, Label } from '@/components/atoms/form/Form';

export function ForgotPasswordForm(): React.JSX.Element {
  return (
    <form>
      <FormGroup isLastChild>
        <Label>Email address</Label>
        <FormControl type="email" placeholder="example123@mail.com" />
      </FormGroup>
      <Button
        el="button"
        variant="primary"
        type="submit"
        className="block w-full"
      >
        Send password link
      </Button>
    </form>
  );
}
