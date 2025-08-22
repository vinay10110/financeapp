import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import Product from './models/Product.js';
import kpiRoutes from './routes/kpi.js';
import transactionRoutes from './routes/transaction.js';
import productRoutes from './routes/product.js';
import Transaction from './models/Transaction.js';
import KPI from './models/KPI.js';
import { kpis, products, transactions } from './data/data.js';
import cron from 'node-cron';  

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: `${process.env.CLIENT_ADDRESS}`,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With'],
  credentials:true
}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `${process.env.CLIENT_ADDRESS}`);
  next();
});
app.use(helmet());
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// routes
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    // keep-alive job: runs once every 6 days at midnight
    cron.schedule("0 0 */6 * *", async () => {
      try {
        await mongoose.connection.db.admin().ping();
        console.log("📡 MongoDB keep-alive ping sent");
      } catch (err) {
        console.error("❌ MongoDB keep-alive ping failed:", err);
      }
    });

    // If you want to seed data once:
    // await mongoose.connection.db.dropDatabase();
    // await KPI.insertMany(kpis);
    // await Product.insertMany(products);
    // await Transaction.insertMany(transactions);
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
