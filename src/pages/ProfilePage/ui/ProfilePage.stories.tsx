import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
// import avatar from 'shared/assets/tests/storybook_avatar.png'; (убрано из-за проблем Github actions)
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'Shuten',
      country: Country.Belarus,
      lastname: 'Mat',
      age: 37,
      first: 'Dron',
      city: 'Vitebsk',
      currency: Currency.USD,
      // avatar, (убрано из-за проблем Github actions)
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'Shuten',
        country: Country.Belarus,
        lastname: 'Mat',
        age: 37,
        first: 'Dron',
        city: 'Vitebsk',
        currency: Currency.USD,
        // avatar, (убрано из-за проблем Github actions)
      },
    },
  })];
