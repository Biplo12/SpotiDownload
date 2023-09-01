import * as React from 'react';

import DialogController from '@/components/Dialogs/DialogController';
import HomePage from '@/components/HomePage';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { useAppSelector } from '@/store/store-hooks';

export default function MainPage() {
  const { isOpen } = useAppSelector((state) => state.global.dialog);

  return (
    <Layout>
      <Seo />
      {isOpen && <DialogController />}
      <HomePage />
    </Layout>
  );
}
