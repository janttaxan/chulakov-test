import { EAvatar } from '../enums/EAvatar';

export interface IRequestData {
  id: number;
  favourite: boolean;
  name: string;
  age: number;
  phone: string;
  image: EAvatar;
  phrase: string;
  video?: string;
}
