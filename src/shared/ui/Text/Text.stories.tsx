import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title Vitebsk',
  text: 'Text Bilevo',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title Vitebsk',
  text: 'Text Bilevo',
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title Vitebsk',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Text Bilevo',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title Vitebsk',
  text: 'Text Bilevo',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title Vitebsk',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Text Bilevo',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
