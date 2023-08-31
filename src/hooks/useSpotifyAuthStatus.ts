import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import useSpotifyUserTokens from '@/hooks/useSpotifyUserTokens';

import { useAppDispatch } from '@/store/store-hooks';

import { setSpotifyAuthStatus } from '@/state/globalSlice';

const useIsLoggedIn = () => {
  const dispatch = useAppDispatch();
  const { access_token } = useSpotifyUserTokens();
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
};

export default useIsLoggedIn;
