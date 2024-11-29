const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/blogRouter.js');

const cors=require('cors')

const app = express();
const port = 3000;

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
    res.send("From the server");
});


// Database Connection
main()
    .then(() => console.log("DB connected.."))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://ajaykiran1221:sCBtP3L2FUjLOhGi@cluster0.j8h98.mongodb.net/22UBC103', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

// Start Server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
