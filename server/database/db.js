import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // const url = `mongodb+srv://${username}:${password}@cluster0.httivqb.mongodb.net/?retryWrites=true&w=majority`;
    const URL = `mongodb+srv://${username}:${password}@cluster0.httivqb.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    }catch(error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;