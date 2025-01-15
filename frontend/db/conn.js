// const mongoose = require("mongoose");

// const DB = process.env.DATABASE;

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// }).then(() => 
//     console.log("connection successful")).catch((err) =>{
//         console.log(err)
// });


require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");

const DB = "mongodb+srv://karthavyasrivastava:Karthavya1234@cluster0.tvgzo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
console.log("MongoDB URI:", DB);  // Debugging: Check if the URI is correct

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => 
    console.log("Connection successful"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
