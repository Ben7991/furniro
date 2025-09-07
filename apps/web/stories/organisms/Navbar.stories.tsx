import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Navbar } from '@/components/organisms/navbar/Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'organisms/Navbar',
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
