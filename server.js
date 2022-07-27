const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({extended:true}))

require("./server/routes/game.routes")(app);

app.listen(port, () => console.log(`Running on port: ${port}!`))