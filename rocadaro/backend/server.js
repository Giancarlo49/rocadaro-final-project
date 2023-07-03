import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import UserRouter from "./routes/userRouter.js";
import connectDB from "./database/connectDB.js";


const app = express();
app.use(cors());


const port = process.env.PORT || 5030;

app.get("/", (req, res) => {
    res.send("Hallo von GET");
  });


  app.use("/user", UserRouter);




  const startServer = async () => {
    try {
      await connectDB(process.env.MONGO_URL);
      console.log("Verbindung mit MongoDB hat geklappt");
      app.listen(port, () => {
        console.log("Server läuft auf: ", port);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();