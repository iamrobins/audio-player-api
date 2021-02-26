import ytdl from "ytdl-core"; 
import { Request, Response } from "express";
import { createReadStream, createWriteStream, statSync } from "fs";


export const player = async (req: Request, res: Response) => {
  let filePath = 'myfile.webm';
  let stat = statSync(filePath);

  res.set('content-type', 'audio/webm');
  res.set('accept-ranges', 'bytes');
  res.set('content-length', `${stat.size}`);

  ytdl('https://www.youtube.com/watch?v=XRuDQ6aYeD0')
  .pipe(createWriteStream(filePath)).on("finish", () => {
    let readStream = createReadStream(filePath);
    readStream.pipe(res);
  })
}

export const radio = async (req: Request, res: Response) => {
  res.set('content-type', 'audio/webm');
  res.set('accept-ranges', 'bytes');

  ytdl('https://www.youtube.com/watch?v=XRuDQ6aYeD0', {filter: 'audioonly'})
  .pipe(res);
}