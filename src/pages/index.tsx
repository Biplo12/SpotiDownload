import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import StartPage from '@/components/StartPage';

export default function MainPage() {
  return (
    <Layout>
      <Seo />
      <StartPage />
    </Layout>
  );
}
