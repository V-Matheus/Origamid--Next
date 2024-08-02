import ClientFetch from '@/components/clientFetch';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Essa é a página sobre',
};

const Width = dynamic(() => import('@/components/width'), { ssr: false });

export default function SobrePage() {
  return (
    <main>
      <h2>Sobre</h2>
      <Width />
      <ClientFetch />
    </main>
  );
}
