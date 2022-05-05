import express from 'express';
import bodyParser from 'body-parser';
import db from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import dotenv from 'dotenv';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3001
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.get('/', async function (req, res) {
  res.send('Welcome to Entitlement Automation !!');
})

app.post('/address', async (req, res) => {
  const { fullname, city, country, mobile_no, pincode, address } = req.body;
  try{
    let docRef = await addDoc(collection(db, "emergency_address"), {
      fullname,
      city,
      country,
      mobile_no,
      pincode,
      address
    });
    res.status(200).send({message: "Address added successfully", docId: docRef.id});
  }catch(e){
    res.status(400).send({message: "Failed to add address", error: e});
  }
})

app.post('/sim_info', async (req, res) => {
  const { mcc, mnc, mobile_no } = req.body;
  try{
    let docRef = await addDoc(collection(db, "sim_info"), {
      mcc,
      mnc,
      mobile_no
    });
    res.status(200).send({message: "Information added successfully", docId: docRef.id});
  }catch(e){
    res.status(400).send({message: "Failed to add sim Information", error: e});
  }
})



app.listen(PORT, () => {
    console.log("Server running on port at http://localhost:"+PORT);
})