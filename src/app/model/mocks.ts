import { User } from './user';

export const USER_DATA: User[] = [{
  firstName: 'Bill',
  lastName: 'Gates',
  dob: new Date('Dec 21, 1964'),
  company: 'Microsoft',
  income: 50000,
  image:
    'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg',
  votes: 220,
},{
  firstName: 'Steve',
  lastName: 'Jobs',
  dob: new Date('Aug 1, 1964'),
  company: 'Apple',
  income: 0,
  image:
    'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
  votes: 200,
},{
  firstName: 'Tim B.',
  lastName: 'Lee',
  dob: new Date('Jan 3, 1964'),
  company: 'World Wide Web',
  income: 30000,
  image:
    'https://cdn.ttgtmedia.com/ITKE/cwblogs/read-all-about-it/sir-tim-berners-lee.jpg',
  votes: 120,
}]
