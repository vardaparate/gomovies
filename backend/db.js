const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:gofoodproject@cluster0.qisnkyn.mongodb.net/gomovies?retryWrites=true&w=majority&appName=Cluster0';

const mongoDb = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
        try {
        const fetched_data1 = mongoose.connection.db.collection('movieItems');
            global.movie_items =  await fetched_data1.find({}).toArray();
            const fetched_data2 = mongoose.connection.db.collection('movieCategory');
            global.movie_cats = await fetched_data2.find({}).toArray();
            
            // console.log(global.movie_items, global.movie_cats);
        }
        catch(err) {
            console.log(err);
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = mongoDb;