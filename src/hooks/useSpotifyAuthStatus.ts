import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import useSpotifyUserTokens from '@/hooks/useSpotifyUserTokens';

import { useAppDispatch } from '@/store/store-hooks';

import { setSpotifyAuthStatus } from '@/state/globalSlice';

const useSpotifyAuthStatusQuery = (
  access_token: string | string[] | undefined
) => {
  const dispatch = useAppDispatch();
  const { data, isError } = useQuery({
    queryKey: ['spotifyAuthStatus'],
    queryFn: async () =>
      await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    enabled: !!access_token,
  });

  const spotifyAuthStatus = data && !isError;
  dispatch(setSpotifyAuthStatus(spotifyAuthStatus));
  return { spotifyAuthStatus };
};

const useIsLoggedIn = () => {
  const { access_token } = useSpotifyUserTokens();
  const { spotifyAuthStatus } = useSpotifyAuthStatusQuery(access_token);

  return { spotifyAuthStatus };
};

export default useIsLoggedIn;
