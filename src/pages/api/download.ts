import { NextApiRequest, NextApiResponse } from 'next';
import ytdl from 'ytdl-core';
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { url } = req.query as { url: string };
    const song = ytdl(url, {
      quality: 'lowestaudio',
      filter: 'audioonly',
    });
    res.setHeader('Content-Disposition', `attachment; filename="song.mp3"`);
    song.pipe(res);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export default handler;
