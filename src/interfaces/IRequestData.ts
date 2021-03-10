import { EAvatar } from '../enums/EAvatar';
import { EVideos } from '../enums/EVideos';

export interface IRequestData {
  id: number;
  favourite: boolean;
  name: string;
  age: number;
  phone: string;
  image: EAvatar;
  phrase: string;
  video?: EVideos;
}
