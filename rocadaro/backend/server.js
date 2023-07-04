import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import UserRouter from "./routes/userRouter.js";
import productRouter from './routes/productRouter.js';
import connectDB from "./database/connectDB.js";


const app = express();
//Url frontend ====>
app.use(cors({credentials:true, origin:"http://localhost:5173"}));

// wischtiger MIDDLEWARES
app.use(express.json());


const port = process.env.PORT || 5030;

// app.get("/", (req, res) => {
//     res.send("Hallo von GET");
//   });


  app.use("/user", UserRouter);
  app.use('/products', productRouter);




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