import isChromatic from 'chromatic/isChromatic'
import type { Meta, StoryObj } from '@storybook/react'
import { MdShoppingCartCheckout, MdOutlineCalendarMonth, MdFavoriteBorder, MdWarning } from "react-icons/md"
import "../../styles/globals.css"
import Button from './'
import { ButtonProps, VariantType, SizeType }  from './Button'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { lightTheme, darkTheme, type ThemeType } from '../themes'
import React from 'react'

const withColorScheme = (Story: any, context: any) => {
  let { scheme } = context.globals

  const Flex: React.FC<{ theme: ThemeType }> = ({ theme }: { theme: ThemeType } ) => {
    return (
      <ThemeProvider theme={ theme }>
        <div style={{
          display: "flex",
          justifyContent: "center",
          padding: "4rem 0 4rem",
          backgroundColor: theme.name === "dark" ? "#000000" : "#eff7f6"
        }}>
          <Story />
        </div>
      </ThemeProvider>
    )
  }

  if (isChromatic()) {
    scheme = "both"
  }

  if (scheme === 'light') {
    return (
        <Flex theme={lightTheme} />
    )
  }

  if (scheme === 'dark') {
    return (
      <Flex theme={darkTheme} />
    )
  }

  return (
    <>
      <Flex theme={lightTheme} />
      <Flex theme={darkTheme} />
    </>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "General/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    withColorScheme,
    // (Story) => (
    //   <div className="flex justify-center">
    //     <Story />
    //   </div>
    // ),
  ],
  args: {
    children: "Button",
  },
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
      options: [
        SizeType.sm,
        SizeType.md,
        SizeType.lg,
      ]
    },
    $variant: {
      control: {
        type: "radio",
      },
      options: [
        VariantType.contained,
        VariantType.text,
        VariantType.outline,
      ],
    },
    color: {
      control: {
        type: "radio",
      },
      options: [
        "default",
        "primary",
        "secondary",
        "danger",
      ]
    },
    $disableShadow: {
      type: "boolean"
    },
    disabled: {
      type: "boolean",
    },
    onClick: {
      type: "function",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Playground: Story = {
  render: (args: ButtonProps) => <Button {...args}>{args.children}</Button>,
};

export const Active: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-2">
      <Button $variant="contained" $active color="default" {...args}>
        {args.children}
      </Button>
    </div>
  ),
};

export const Variant: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-2">
      <Button $variant="contained" {...args}>
        Contained
      </Button>
      <Button $variant="outline" {...args}>
        Outline
      </Button>
      <Button $variant="text" {...args}>
        Text
      </Button>
    </div>
  ),
};

export const Color: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-2">
      <Button color="default" {...args}>
        {args.children}
      </Button>
      <Button color="primary" {...args}>
        {args.children}
      </Button>
      <Button color="secondary" {...args}>
        {args.children}
      </Button>
      <Button color="danger" {...args}>
        {args.children}
      </Button>
    </div>
  ),
};

export const Outline: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-2">
      <Button $variant="outline" color="default" {...args}>
        {args.children}
      </Button>
      <Button $variant="outline" color="primary" {...args}>
        {args.children}
      </Button>
      <Button $variant="outline" color="secondary" {...args}>
        {args.children}
      </Button>
      <Button $variant="outline" color="danger" {...args}>
        {args.children}
      </Button>
    </div>
  ),
};



export const Text: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-2">
      <Button $variant="text" color="default" {...args}>
        Text
      </Button>
      <Button $variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button $variant="text" color="secondary" {...args}>
        Text
      </Button>
      <Button $variant="text" color="danger" {...args}>
        Text
      </Button>
    </div>
  ),
};


export const ContainedDisabled: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-2">
      <Button disabled $variant="contained" color="default" {...args}>
        {args.children}
      </Button>
      <Button disabled $variant="contained" color="primary" {...args}>
        {args.children}
      </Button>
      <Button disabled $variant="contained" color="secondary" {...args}>
        {args.children}
      </Button>
      <Button disabled $variant="contained" color="danger" {...args}>
        {args.children}
      </Button>
    </div>
  ),
};

export const OutlineDisabled: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-2">
      <Button disabled $variant="outline" color="default" {...args}>
        {args.children}
      </Button>
      <Button disabled $variant="outline" color="primary" {...args}>
        {args.children}
      </Button>
      <Button disabled $variant="outline" color="secondary" {...args}>
        {args.children}
      </Button>
      <Button disabled $variant="outline" color="danger" {...args}>
        {args.children}
      </Button>
    </div>
  ),
};

export const TextDisabled: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-2">
      <Button disabled $variant="text" color="default" {...args}>
        Text
      </Button>
      <Button disabled $variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button disabled $variant="text" color="secondary" {...args}>
        Text
      </Button>
      <Button disabled $variant="text" color="danger" {...args}>
        Text
      </Button>
    </div>
  ),
};



export const Icon: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-2">
      <Button
        endIcon = {<MdFavoriteBorder />}
        color="default"
        {...args}
      >
        {args.children}
      </Button>
      <Button
        startIcon={<MdShoppingCartCheckout />}
        color="primary"
        {...args}
      >
        {args.children}
      </Button>
      <Button
        $variant='outline'
        startIcon={<MdOutlineCalendarMonth />}
        color="secondary"
        {...args}
      >
        {args.children}
      </Button>
      <Button
        $variant='text'
        endIcon={<MdWarning />}
        color="danger"
        {...args}
      >
        {args.children}
      </Button>
    </div>
  ),
};