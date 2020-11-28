import express from 'express';
import {connect} from 'mongoose';
import {json} from 'body-parser';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());


connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('*', (req,res) => {
  res.send("Conectado exitosamente a MongoDB Atlas");
})


export default app; 

//mongodb+srv://joel:1234@restaurante.rb6p2.mongodb.net/pedidos?retryWrites=true&w=majority