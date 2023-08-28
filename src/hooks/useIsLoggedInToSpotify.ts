import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import useUserTokens from '@/hooks/useUserTokens';

import { useAppDispatch } from '@/store/store-hooks';

import { setIsLoggedInToSpotify } from '@/state/globalSlice';

const useIsLoggedInToSpotifyQuery = (
  access_token: string | string[] | undefined
) => {
  const dispatch = useAppDispatch();
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
  dispatch(setIsLoggedInToSpotify(isLoggedInToSpotify));
  return { isLoggedInToSpotify };
};

const useIsLoggedIn = () => {
  const { access_token } = useUserTokens();
  const { isLoggedInToSpotify } = useIsLoggedInToSpotifyQuery(access_token);

  return { isLoggedInToSpotify };
};

export default useIsLoggedIn;
