import type { Meta, StoryObj } from '@storybook/react';
import { DefaultTheme } from "styled-components";
import { MdShoppingCartCheckout, MdOutlineCalendarMonth, MdFavoriteBorder, MdWarning } from "react-icons/md";

import "../../styles/globals.css"
import Button from './';
import { ButtonProps, VariantProps, SizeProps }  from './Button';
import { ColorProps } from '../../types/StyleType';
import { hexToRgba } from '../../utils/colorUtils';

const theme: DefaultTheme = {
  name: "default",
  fontSize: "14px",
  borderRadius: "6px",
  borderWidth: "2px",
  borderStyle: "solid",
  bodyColor: "#EFF7F6",
  textColor: "black",
  size: {
    sm: "6px 12px",
    md: "8px 16px",
    lg: "11px 22px",
  },
  palette: {
    common: {
      black: "black",
      white: "white",
    },
    default: {
      main: "#E0E0E0",
      contrastText: "#3F3F3F",
      colorHover: "#AEAEAE",
      shadowColor: hexToRgba("333", .4),
      outlineHover: hexToRgba("333", .1),
      disabled: "#9E9E9E",
    },
    primary: {
      main: "#3D5AFE",
      contrastText: "white",
      colorHover: "#0039CB",
      shadowColor: hexToRgba("#0039CB", .4),
      outlineHover: hexToRgba("#0039CB", .1),
      disabled: hexToRgba("#0039CB", .4),
    },
    secondary: {
      main: "#455A64",
      contrastText: "white",
      colorHover:  "#1C313A",
      shadowColor: hexToRgba("#455A64", .4),
      outlineHover: hexToRgba("#455A64", .1),
      disabled: hexToRgba("#455A64", .4),
    },
    danger: {
      main: "#e5383b",
      contrastText: "white",
      colorHover: "#9A0007",
      shadowColor: hexToRgba("#D32F2F", .4),
      outlineHover: hexToRgba("#D32F2F", .1),
      disabled: hexToRgba("#D32F2F", .4),
    },
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "General/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    children: "Button",
    theme,
  },
  argTypes: {
    theme: {
      control: {
        type: "object",
      }
    },
    size: {
      control: {
        type: "radio",
      },
      options: [
        SizeProps.sm,
        SizeProps.md,
        SizeProps.lg,
      ]
    },
    $variant: {
      control: {
        type: "radio",
      },
      options: [
        VariantProps.contained,
        VariantProps.text,
        VariantProps.outline,
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
      <Button disabled variant="text" color="default" {...args}>
        Text
      </Button>
      <Button disabled variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button disabled variant="text" color="secondary" {...args}>
        Text
      </Button>
      <Button disabled variant="text" color="danger" {...args}>
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
        variant='outline'
        startIcon={<MdOutlineCalendarMonth />}
        color="secondary"
        {...args}
      >
        {args.children}
      </Button>
      <Button
        variant='text'
        endIcon={<MdWarning />}
        color="danger"
        {...args}
      >
        {args.children}
      </Button>
    </div>
  ),
};