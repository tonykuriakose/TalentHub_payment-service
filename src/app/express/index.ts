import express, { Application } from "express";

class Server {
  public app: Application;
  private server: any;

  constructor() {
    this.app = express();
    this.initialize();
  }

  async initialize() {
    try {
      console.log("Server initializing");
    } catch (error) {
      console.log("Error in initializing", error);
    }
  }

  start(PORT:number | string){{
    this.server = this.app.listen(PORT,()=>{
        console.log(`Server running on ${PORT}`);
        
    })
  }

  }
}

export default Server;
