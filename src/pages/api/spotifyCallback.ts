import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import qs from 'qs';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const SPOTIFY_REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;
  const CLIENT_SECRET = process.env.SPOTIFY_SECRET_CLIENT_ID;
  const code = req.query.code as string;
  const state = req.query.state as string;
  if (state === null) {
    res.redirect(
      '/#' +
        qs.stringify({
          error: 'state_mismatch',
        })
    );
  } else {
    const authOptions = {
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(SPOTIFY_CLIENT_ID + ':' + CLIENT_SECRET).toString(
            'base64'
          ),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: SPOTIFY_REDIRECT_URI,
      }),
    };

    const response = await axios(authOptions);
    const access_token = response.data.access_token;
    const refresh_token = response.data.refresh_token;

    res.redirect(
      '/?' +
        qs.stringify({
          access_token: access_token,
          refresh_token: refresh_token,
        })
    );
  }
};

export default handler;
