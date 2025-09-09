'use client';

import { Button } from '@/components/atoms/button/Button';
import { FormControl, FormGroup, Label } from '@/components/atoms/form/Form';

export function ResetPasswordForm(): React.JSX.Element {
  return (
    <form>
      <FormGroup>
        <Label htmlFor="new-password">New password</Label>
        <FormControl type="text" name="new-password" />
      </FormGroup>
      <FormGroup isLastChild>
        <Label htmlFor="confirm-password">Confirm password</Label>
        <FormControl type="text" name="confirm-password" />
      </FormGroup>
      <Button
        el="button"
        variant="primary"
        type="submit"
        className="block w-full"
      >
        Submit
      </Button>
    </form>
  );
}
