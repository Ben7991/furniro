'use client';

import { LuEye, LuEyeOff } from 'react-icons/lu';

type PasswordToggleProps = {
  visible: boolean;
  onToggleVisibility: VoidFunction;
};

export function PasswordToggle({
  visible,
  onToggleVisibility: onTogglePasswordVisibility,
}: PasswordToggleProps): React.JSX.Element {
  return (
    <button
      onClick={onTogglePasswordVisibility}
      type="button"
      className="hover:cursor-pointer"
    >
      {visible ? (
        <LuEyeOff className="text-xl" />
      ) : (
        <LuEye className="text-xl" />
      )}
    </button>
  );
}
