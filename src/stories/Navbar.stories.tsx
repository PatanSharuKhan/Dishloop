import Navbar from "../app/components/Navbar"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  args: {},
}

export default meta
type Story = StoryObj<typeof Navbar>

export const NavbarLight: Story = {
  args: {},
}
