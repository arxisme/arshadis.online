import React from 'react';
import { Michroma } from 'next/font/google';
import microsoftEntraId from 'next-auth/providers/microsoft-entra-id';

const michroma = Michroma({
  weight: '400',
  subsets: ['latin'],
});

const Page = () => {
  return (
    <div
      className={`flex flex-col h-screen justify-center text-3xl items-center text-secondary ${michroma.className}`}
    >
      this is admin
    </div>
  );
};

export default Page;
