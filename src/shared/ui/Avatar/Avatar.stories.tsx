import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: 'https://cdn.freelance.ru/img/portfolio/pics/00/43/68/4417745.jpg?mt=7595ad4f',
};

export const Small = Template.bind({});
Small.args = {
  size: 100,
  src: 'https://cdn.freelance.ru/img/portfolio/pics/00/43/68/4417745.jpg?mt=7595ad4f',
};
