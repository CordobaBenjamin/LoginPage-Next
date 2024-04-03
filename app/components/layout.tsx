import { Metadata } from 'next';
import Hooks from './hooks';
import { Inter } from 'next/font/google';
import './style/style.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Login Account ',
    description: 'Generated by create next app',
};

const IndexLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
        <Hooks/>
    </html>
  );
};

export default IndexLayout;