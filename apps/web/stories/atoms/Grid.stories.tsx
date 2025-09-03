import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Col, Container, Row } from '@/components/atoms/grid/Grid';

const meta: Meta<typeof Container> = {
  title: 'Atoms/Grid',
  component: Container,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'py-4',
  },
  render: (args) => (
    <Container {...args}>
      <Row className="justify-between">
        <Col className="border">
          <p>This is the first column</p>
        </Col>
        <Col className="border">
          <p>This is the second column</p>
        </Col>
        <Col className="border">
          <p>This is the third column</p>
        </Col>
      </Row>
    </Container>
  ),
};
