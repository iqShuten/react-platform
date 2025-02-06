import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook_avatar.png';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/LoginForm',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'Shuten',
    country: Country.Belarus,
    lastname: 'Mat',
    age: 37,
    first: 'Dron',
    city: 'Vitebsk',
    currency: Currency.USD,
    avatar,
  },

};

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};

export const loading = Template.bind({});
loading.args = {
  isLoading: true,
};
