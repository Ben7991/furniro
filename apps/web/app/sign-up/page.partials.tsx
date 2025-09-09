import { Button } from '@/components/atoms/button/Button';
import { FormControl, FormGroup, Label } from '@/components/atoms/form/Form';

export function RegisterForm(): React.JSX.Element {
  return (
    <form>
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <FormControl type="text" name="name" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email address</Label>
        <FormControl
          type="email"
          name="email"
          placeholder="example123@mail.com"
        />
      </FormGroup>
      <FormGroup>
        <Label id="password">Password</Label>
        <FormControl
          type="password"
          name="password"
          placeholder="example123@mail.com"
        />
      </FormGroup>
      <FormGroup isLastChild>
        <Label htmlFor="confirm-password">Confirm password</Label>
        <FormControl
          type="password"
          name="confirm-password"
          placeholder="example123@mail.com"
        />
      </FormGroup>
      <Button
        el="button"
        variant="primary"
        type="submit"
        className="block w-full"
      >
        Register Now
      </Button>
    </form>
  );
}
