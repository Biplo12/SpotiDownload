import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import logger from '@/lib/logger';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
  const GOOGLE_SECRET_CLIENT_ID = process.env.GOOGLE_SECRET_CLIENT_ID;
  const code = req.query.code as string;

  if (!code) {
    res.redirect('/?error=google_auth_failed');
  } else {
    const authOptions = {
      url: 'https://accounts.google.com/o/oauth2/token',
      form: {
        code: code,
        redirect_uri: GOOGLE_REDIRECT_URI,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_SECRET_CLIENT_ID,
        grant_type: 'authorization_code',
      },
      json: true,
    };

    const response = await axios(authOptions);
    const access_token = response.data.access_token;
    logger({ access_token });
  }
};

export default handler;
