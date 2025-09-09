'use client';

import { useState } from 'react';

import { FormControl, FormGroup, Label } from '@/components/atoms/form/Form';
import { Button } from '@/components/atoms/button/Button';
import { PasswordToggle } from '@/components/molecules/password-toggle/PasswordToggle';
import Link from 'next/link';

export function LoginForm(): React.JSX.Element {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggle = (): void => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <form>
      <FormGroup>
        <Label>Email Address</Label>
        <FormControl type="text" placeholder="example45@mail.com" />
      </FormGroup>
      <FormGroup isLastChild>
        <div className="flex justify-between items-center">
          <Label>Password</Label>
          <Link
            href="/forgot-password"
            className="text-blue-700 hover:underline"
          >
            forgot password?
          </Link>
        </div>
        <FormControl type={isPasswordVisible ? 'text' : 'password'}>
          <PasswordToggle
            visible={isPasswordVisible}
            onToggleVisibility={toggle}
          />
        </FormControl>
      </FormGroup>
      <Button
        el="button"
        variant="primary"
        type="submit"
        className="block w-full"
      >
        Login
      </Button>
    </form>
  );
}
