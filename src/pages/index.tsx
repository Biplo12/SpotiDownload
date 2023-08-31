import * as React from 'react';

import useSpotifyAuthStatus from '@/hooks/useSpotifyAuthStatus';

import HomePage from '@/components/HomePage';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import StartPage from '@/components/StartPage';

export default function MainPage() {
  const { spotifyAuthStatus } = useSpotifyAuthStatus();
  return (
    <Layout>
      <Seo />
      {!spotifyAuthStatus ? <StartPage /> : <HomePage />}
    </Layout>
  );
}
