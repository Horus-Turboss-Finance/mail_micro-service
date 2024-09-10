import express from "express";
import { errorCode } from "./config/types";
import { ResponseProtocole } from "./middleware/response";
import { ResponseException } from "./utils/responseException";

import { catchSync } from "./middleware/catchAsync";

const app = express()

/*
MIDDLEWARE
*/

app.use(express.json())

/*
API USER SERVICE
*/

// app.use("/mail", userRouter)

/*
ERROR 404
*/

app.use('*', catchSync(async() => {
    throw new ResponseException(errorCode.NotFound, "Chemin ou méthodes non supporté.")
}))

/*
ERROR HANDLER
*/
app.use(ResponseProtocole);

export default app;