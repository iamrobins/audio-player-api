import express from 'express'
const app = express()
const port = 5000;
import media from "./routes/media";

//middlewares
app.use("/", media);

app.listen(port, () => console.log(`Running on port ${port}`));