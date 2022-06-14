// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toast } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactToastLibrary/Toast",
  component: Toast,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Toast>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  title: "Success",
  description: "Success message",
  toastRole: "success",
  closeDelayMS: 2000,
  color: "white",
  backgroundColor: "green",
  position: "bottom-right",
  animation: "bounce",
};

export const Info = Template.bind({});
Info.args = {
  title: "Info",
  description: "Info message",
  toastRole: "info",
  color: "white",
  backgroundColor: "blue",
  position: "top-right",
  animation: "slide",
};

export const Warn = Template.bind({});
Warn.args = {
  title: "Warning",
  description: "Warning message",
  toastRole: "warn",
  color: "black",
  backgroundColor: "yellow",
  position: "top-left",
  animation: "flip",
};

export const Error = Template.bind({});
Error.args = {
  description: "Error message",
  toastRole: "error",
  color: "white",
  backgroundColor: "red",
  position: "bottom-left",
};
