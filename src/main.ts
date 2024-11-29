import app from "./application/app";
import { logger } from "./application/logging";

app.listen(3000 ,()=>{
    logger.info("listening on http://localhost:3000/")
})