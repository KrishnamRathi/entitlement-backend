import express from 'express';
import bodyParser from 'body-parser';
import db from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';


const app = express();
const PORT = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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



app.listen(PORT, () => {
    console.log("Server running on port at http://localhost:"+PORT);
})