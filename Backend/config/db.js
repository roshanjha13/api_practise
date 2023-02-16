const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect("mongodb+srv://roshanjha:kumar%401234@cluster0.iwbwobe.mongodb.net/api_practise?retryWrites=true&w=majority")
        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB