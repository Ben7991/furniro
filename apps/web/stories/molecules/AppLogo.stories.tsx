import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AppLogo } from '../../components/molecules/appLogo/AppLogo';

const meta: Meta<typeof AppLogo> = {
  title: 'Molecules/AppLogo',
  component: AppLogo,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
