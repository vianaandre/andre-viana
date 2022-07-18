import { StaticImageData } from 'next/image';

export interface ICardProject {
    title: string;
    image: StaticImageData;
    category: 'web' | 'mobile';
    href: string;
}
