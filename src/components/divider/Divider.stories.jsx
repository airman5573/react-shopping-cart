import Divider from "./Divider";

export default {
  title: "Divider/Divider",
  component: Divider,
  argTypes: {},
};

function Template(props) {
  return <Divider {...args} />;
}

export const Primary = Template.bind({});
