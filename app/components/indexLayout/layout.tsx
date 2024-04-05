import { Metadata } from 'next';
import FormRoot from './formRoot';
import { Inter } from 'next/font/google';
import '../global.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Login Account',
    description: 'Generated by create next app',
};

const IndexLayout = ({children}: {children: React.ReactNode}) => {
  return (
        <FormRoot/>
  );
};

export default IndexLayout;