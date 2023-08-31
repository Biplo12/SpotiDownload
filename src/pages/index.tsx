import * as React from 'react';

import HomePage from '@/components/HomePage';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function MainPage() {
  return (
    <Layout>
      <Seo />
      <HomePage />
    </Layout>
  );
}
