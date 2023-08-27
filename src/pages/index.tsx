import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Main from '@/components/Main';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <Main />
    </Layout>
  );
}
