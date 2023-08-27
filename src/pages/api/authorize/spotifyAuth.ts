import { NextApiRequest, NextApiResponse } from 'next';
import qs from 'qs';

import { generateRandomString } from '@/lib/helper';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const SPOTIFY_REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email';

  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      qs.stringify({
        response_type: 'code',
        client_id: SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: SPOTIFY_REDIRECT_URI,
        state: state,
      })
  );
};

export default handler;
