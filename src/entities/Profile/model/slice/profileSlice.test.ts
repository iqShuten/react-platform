import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileShema, ValidateProfileErrors } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  username: 'Shuten',
  country: Country.Belarus,
  lastname: 'Mat',
  age: 37,
  first: 'Dron',
  city: 'Vitebsk',
  currency: Currency.USD,
};

describe('profileSlice.test', () => {
  test('test set readonly: true', () => {
    const state: DeepPartial<ProfileShema> = { readonly: false };
    expect(profileReducer(
            state as ProfileShema,
            profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileShema> = { data, form: { username: '' } };
    expect(profileReducer(
            state as ProfileShema,
            profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      ValidateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileShema> = { form: { username: '123' } };
    expect(profileReducer(
            state as ProfileShema,
            profileActions.updateProfile({ username: '123456' }),
    )).toEqual({
      form: { username: '123456' },
    });
  });

  test('test update profil service pending', () => {
    const state: DeepPartial<ProfileShema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };
    expect(profileReducer(
            state as ProfileShema,
            updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profil service fullfiled', () => {
    const state: DeepPartial<ProfileShema> = {
      isLoading: true,
    };
    expect(profileReducer(
            state as ProfileShema,
            updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
