import { appCritic } from "./types";
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({path : path.resolve('./src/config/.env')})

export const APPCRITIC : appCritic = {
    EMAILAPIPRIVATEKEY : process.env.EMAILAPIPRIVATEKEY!,
    EMAILPUBLICADRESS : process.env.EMAILPUBLICADRESS!,
    URLAPP : process.env.URLAPP!,
}