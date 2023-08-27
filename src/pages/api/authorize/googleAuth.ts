import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

  res.redirect(
    'https://accounts.google.com/o/oauth2/auth' +
      '?client_id=' +
      GOOGLE_CLIENT_ID +
      '&redirect_uri=' +
      GOOGLE_REDIRECT_URI +
      '&scope=' +
      'https://www.googleapis.com/auth/userinfo.profile' +
      '&response_type=code' +
      '&access_type=offline' +
      '&prompt=consent'
  );
};

export default handler;
