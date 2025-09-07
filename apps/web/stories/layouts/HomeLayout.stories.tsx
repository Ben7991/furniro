import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { HomeLayout } from '@/components/layouts/home/HomeLayout';
import { Container } from '@/components/atoms/grid/Grid';

const meta: Meta<typeof HomeLayout> = {
  title: 'layouts/HomeLayout',
  component: HomeLayout,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <HomeLayout {...args}>
      <article className="text-center py-10">
        <Container>
          <p>Other content shows up here</p>
        </Container>
      </article>
    </HomeLayout>
  ),
};
