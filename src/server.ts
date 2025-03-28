import { config } from "dotenv";
import Server from "./app/express";
config();




 const expressServer = new Server();


const PORT = process.env.PORT || 3007; 

 expressServer.start(PORT);





