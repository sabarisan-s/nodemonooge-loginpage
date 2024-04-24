const mongoose = require("mongoose");
database = async () => {
  try {
    await mongoose.connect( "mongodb+srv://root:8015003338s@cluster0.2xmyrp5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("connected");
  } catch (error) {
    console.log((error.message = "not connected"));
  }
};

module.exports=database
