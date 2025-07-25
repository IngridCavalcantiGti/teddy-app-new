import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { Button } from "./Button"

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      required: false,
      description: "Label do botão",
      control: { type: "text" },
    },
    variant: {
      required: false,
      description: "Tipo do botão",
      control: { type: "select" },
      defaultValue: "outlined",
      options: ["filled", "outlined"],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {
  args: {
    label: "Button",
    variant: "filled",
  },
}

export const Outlined: Story = {
  args: {
    label: "Button",
    variant: "outlined",
  },
}
