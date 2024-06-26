import express from 'express';
import cors from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import morgan from 'morgan';
import helmet from 'helmet';
import Product from './models/Product.js';
import kpiRoutes from './routes/kpi.js';
import transactionRoutes from './routes/transaction.js';
import productRoutes from './routes/product.js';
import Transaction from './models/Transaction.js';
import KPI from './models/KPI.js';
import {kpis,products,transactions} from './data/data.js'
dotenv.config() ;
const app=express();
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With'],
  credentials:true
}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use(helmet());
app.use(morgan('common'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use("/kpi",kpiRoutes);
app.use("/product",productRoutes);
app.use("/transaction",transactionRoutes);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB");
    try {
     
       //await mongoose.connection.db.dropDatabase();
     //KPI.insertMany(kpis);
    //Product.insertMany(products);
     //Transaction.insertMany(transactions);
    } catch (error) {
      console.error("Error inserting KPIs:", error);
    }
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
  app.listen(3000);
  
