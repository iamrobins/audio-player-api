import {Request, Response, NextFunction} from "express";
import youtube_sr from "youtube-sr";

const searchSong = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    const songDetails = await youtube_sr.search(id, { type: "video", limit: 2 });
    const songId = songDetails[0].id;
    req.params.id = songId;
    return next();
  } catch(error) {
    res.status(400).json({message: `Invalid Term`});
  }
}

export default searchSong;