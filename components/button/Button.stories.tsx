import type { Meta, StoryObj } from '@storybook/react';
import { DefaultTheme } from "styled-components";
import { MdShoppingCartCheckout, MdOutlineCalendarMonth, MdFavoriteBorder, MdWarning } from "react-icons/md";

import "../../styles/globals.css"
import Button from './';
import { ButtonProps, VariantProps, SizeProps }  from './Button';
import { ColorProps } from '../../types/StyleType';

const theme: DefaultTheme = {
  name: "default",
  fontSize: "14px",
  borderRadius: "6px",
  borderWidth: "2px",
  borderStyle: "solid",
  bodyColor: ColorProps.white,
  textColor: ColorProps.black,
  size: {
    sm: "6px 12px",
    md: "8px 16px",
    lg: "11px 22px",
  },
  palette: {
    common: {
      black: ColorProps.black,
      white: ColorProps.white,
    },
    default: {
      main: ColorProps.gray,
      contrastText: ColorProps.deepGray,
      hoverColor: ColorProps.lightGray,
      shadowColor: ColorProps.jetGray,
      outlineColorHover: ColorProps.jetGray,
      disabled: ColorProps.cadetGray,
    },
    primary: {
      main: ColorProps.blue,
      contrastText: ColorProps.white,
      hoverColor: ColorProps.persianBlue,
      shadowColor: ColorProps.persianBlue,
      outlineColorHover: ColorProps.persianBlue,
      disabled: ColorProps.persianBlue,
    },
    secondary: {
      main: ColorProps.paynesGray,
      contrastText: ColorProps.white,
      hoverColor:  ColorProps.gunmetal,
      shadowColor: ColorProps.paynesGray,
      outlineColorHover: ColorProps.paynesGray,
      disabled: ColorProps.paynesGray,
    },
    danger: {
      main: ColorProps.red,
      contrastText: ColorProps.white,
      hoverColor: ColorProps.pennRed,
      shadowColor: ColorProps.persianRed,
      outlineColorHover: ColorProps.persianRed,
      disabled: ColorProps.persianRed,
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
    variant: {
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
      <Button variant="contained" {...args}>
        Contained
      </Button>
      <Button variant="outline" {...args}>
        Outline
      </Button>
      <Button variant="text" {...args}>
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
      <Button variant="outline" color="default" {...args}>
        {args.children}
      </Button>
      <Button variant="outline" color="primary" {...args}>
        {args.children}
      </Button>
      <Button variant="outline" color="secondary" {...args}>
        {args.children}
      </Button>
      <Button variant="outline" color="danger" {...args}>
        {args.children}
      </Button>
    </div>
  ),
};



export const Text: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-2">
      <Button variant="text" color="default" {...args}>
        Text
      </Button>
      <Button variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button variant="text" color="secondary" {...args}>
        Text
      </Button>
      <Button variant="text" color="danger" {...args}>
        Text
      </Button>
    </div>
  ),
};


export const ContainedDisabled: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-2">
      <Button disabled variant="contained" color="default" {...args}>
        {args.children}
      </Button>
      <Button disabled variant="contained" color="primary" {...args}>
        {args.children}
      </Button>
      <Button disabled variant="contained" color="secondary" {...args}>
        {args.children}
      </Button>
      <Button disabled variant="contained" color="danger" {...args}>
        {args.children}
      </Button>
    </div>
  ),
};

export const OutlineDisabled: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-2">
      <Button disabled variant="outline" color="default" {...args}>
        {args.children}
      </Button>
      <Button disabled variant="outline" color="primary" {...args}>
        {args.children}
      </Button>
      <Button disabled variant="outline" color="secondary" {...args}>
        {args.children}
      </Button>
      <Button disabled variant="outline" color="danger" {...args}>
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