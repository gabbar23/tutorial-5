const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package
const { routes } = require("./routes/routes");

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
