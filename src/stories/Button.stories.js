import Button  from "../lib/components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Button',
  component: Button,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
    wide: true,
    children: "asdasd",
    type: "button",
    className: "bg-yellow-700",
  },
};
