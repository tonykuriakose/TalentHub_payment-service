import { config } from "dotenv";
import Server from "./app/express";
import Database from "./core/database";
config();



const db = new Database();
db.connect();



 const expressServer = new Server();


const PORT = process.env.PORT || 3004; 

 expressServer.start(PORT);




 








