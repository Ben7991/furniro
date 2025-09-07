import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Footer } from '@/components/organisms/footer/Footer';

const meta: Meta<typeof Footer> = {
  title: 'organisms/Footer',
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
