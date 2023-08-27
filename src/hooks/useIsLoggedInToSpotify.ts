import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import useUserTokens from '@/hooks/useUserTokens';

const useIsLoggedInToSpotifyQuery = (
  access_token: string | string[] | undefined
) => {
  const { data, isError } = useQuery({
    queryKey: ['isLoggedInToSpotify'],
    queryFn: async () =>
      await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    enabled: !!access_token,
  });

  const isLoggedInToSpotify = data && !isError;
  return { isLoggedInToSpotify };
};

const useIsLoggedToGoogleQuery = (
  access_token: string | string[] | undefined
) => {
  const { data, isError } = useQuery({
    queryKey: ['isLoggedInToGoogle'],
    queryFn: async () =>
      await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
  });

  const isLoggedInToGoogle = data && !isError;
  return { isLoggedInToGoogle };
};

const useIsLoggedIn = () => {
  const { access_token } = useUserTokens();
  const { isLoggedInToSpotify } = useIsLoggedInToSpotifyQuery(access_token);
  const { isLoggedInToGoogle } = useIsLoggedToGoogleQuery(access_token);

  return { isLoggedInToSpotify, isLoggedInToGoogle };
};

export default useIsLoggedIn;
