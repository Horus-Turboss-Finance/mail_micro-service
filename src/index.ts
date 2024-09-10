import app from './app'
import os, { NetworkInterfaceInfo } from "os";
import { loggeurInfo, loggeurServiceErr, serviceType, typeLog } from "./utils/logs";
import { FreePort } from 'checks'

/*
CONNECT API
*/
const main = async () => {
  try{
    const port = await FreePort()
    app.listen(port, () => {
      loggeurInfo(serviceType.app, "Connect Url :", typeLog.info)
      const interfaces : NodeJS.Dict<NetworkInterfaceInfo[]> = os.networkInterfaces();
      for (const k in interfaces) {
          for (const k2 in interfaces[k]) {
              /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
              /* @ts-ignore */
              const address = interfaces[k][k2];
  
              if (address.family === 'IPv4' && !address.internal) {
                  loggeurInfo(serviceType.app, `${address.address}:${port}`, typeLog.info)
                  /*

                  CALL ADRESS MANAGER 

                  */
              }
          }
      }
    })
  }catch(e : any){
    loggeurServiceErr(serviceType.index, e, typeLog.danger)
  }
  
}

main()