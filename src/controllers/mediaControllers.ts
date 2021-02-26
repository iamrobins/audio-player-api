import ytdl from "ytdl-core"; 
import { Request, Response } from "express";
import { createReadStream, createWriteStream, statSync } from "fs";


export const player = async (req: Request, res: Response) => {
  const {id} = req.params;
  let filePath = `${id}`;
  let stat = statSync(filePath);

  res.set('content-type', 'audio/webm');
  res.set('accept-ranges', 'bytes');
  res.set('content-length', `${stat.size}`);

  ytdl(`https://www.youtube.com/watch?v=${id}`, {filter: 'audioonly'})
  .pipe(createWriteStream(filePath)).on("finish", () => {
    let readStream = createReadStream(filePath);
    readStream.pipe(res);
  })
}

export const radio = async (req: Request, res: Response) => {
  const {id} = req.params;

  res.set('content-type', 'audio/webm');
  res.set('accept-ranges', 'bytes');

  ytdl(`https://www.youtube.com/watch?v=${id}`, {filter: 'audioonly'})
  .pipe(res);
}