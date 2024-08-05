'use client';

// import { revalidatePathAction } from '@/actions/revalidate-path';
import { revalidateTag } from 'next/cache';
// import { useEffect } from 'react';

export const Atualizar = () => {
  function handleClick() {
    revalidateTag('acoes');
  }

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     revalidatePathAction('/acoes');
  //   }, 5000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  return <button onClick={handleClick}>atualizar</button>;
};
