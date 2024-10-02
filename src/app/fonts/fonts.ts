import { Volkhov, Poppins } from 'next/font/google';

export const volkhov = Volkhov({
    variable: '--font-volkhov',
    weight: '700',
    subsets: ['latin'],
});
export const poppins = Poppins({
    variable: '--font-poppins',
    weight: ['600', '400'],
    subsets: ['latin'],
});