import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Description,
  Primary as PrimaryStory,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs/blocks';

import {
  AnchorProps,
  Button,
  ButtonProps,
} from '@/components/atoms/button/Button';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  argTypes: {
    el: {
      options: ['button', 'link'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'outline'],
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <strong>Button</strong>
          <hr />
          <Title />
          <Subtitle />
          <Description />
          <PrimaryStory />
          <Stories />
        </>
      ),
    },
  },
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    el: 'button',
    variant: 'primary',
  },
  render: (args: ButtonProps | AnchorProps) => (
    <Button {...args}>Primary Button</Button>
  ),
};

export const Outline: Story = {
  args: {
    el: 'button',
    variant: 'outline',
  },
  render: (args: ButtonProps | AnchorProps) => (
    <Button {...args}>Primary Button</Button>
  ),
};
