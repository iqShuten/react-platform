export {
  Profile,
  ProfileShema,
} from './model/types/profile';

export {
  profileActions,
  profileReducer,
} from './model/slice/profileSlice';

export {
  fetchProfileData,
} from './model/services/fetchProfileData/fetchProfileData';

export {
  ProfileCard,
} from './ui/ProfileCard/ProfileCard';

export { getProfileIsLoading } from './model/selector/getProfileIsLoading/getProfileIsLoading';
export { getProfileData } from './model/selector/getProfileData/getProfileData';
export { getProfileError } from './model/selector/getProfileError/getProfileError';
