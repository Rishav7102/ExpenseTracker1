const mongoose=require('mongoose');
//pass=process.env.PASSWORD
const url='mongodb+srv://rishavranjan7102:qb64zqW8pkAjzXaf@mernexpensetracker.ketcnnr.mongodb.net/?retryWrites=true&w=majority&appName=MernExpenseTracker';
mongoose.connect(url,{useUnifiedTopology: true});

const connection=mongoose.connection;

connection.on('error', err=>console.log(err));
connection.on('connected', ()=>console.log('MongoDB connected'));