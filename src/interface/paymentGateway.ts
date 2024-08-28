import { Image } from '@/interface';

export interface paymentGateway {
  id: string;
  name: string;
  title: string;
  is_disabled: boolean;
  image: Image | null;
}
