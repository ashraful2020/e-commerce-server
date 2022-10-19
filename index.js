const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const fileUpload = require("express-fileupload");

// Apps middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());

// use route and import all router from others file
app.use("/api/v1/product", require("./routes/product"));
app.use("/api/v1/user", require("./routes/user"));
app.use("/api/v1/flash-product", require("./routes/flash_product"));
app.use("/api/v1/latest-deal", require("./routes/latest_deal"));
app.use("/api/v1/category", require("./routes/category"));
app.use("/api/v1/popular-category", require("./routes/popular_category"));
app.use("/api/v1/search-by-category", require("./routes/search_by_category"));
// app.use('/api/v1/',require(""));
// app.use('/api/v1/',require(""));
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.wijwg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    client.connect(() => console.log("Database connected"));
    app.get("/", async (req, res) => {
      res.send(
        `<h1 style='color:#99bbf2;font-size:70px; margin-top:20%; text-align:center'> Amar store server side</h1>`
      );
    });
    app.get("/api/v1", async (req, res) => {
      res.send(
        `<h1 style='color:#99bbf2;font-size:70px; margin-top:20%; text-align:center'> Amar store server side</h1>`
      );
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
module.exports.client = {
  userCollection: client.db("amarstore").collection("users"),
  productCollection: client.db("amarstore").collection("product"),
  categoryCollection: client.db("amarstore").collection("category"),
  flashProductCollection: client.db("amarstore").collection("flashProduct"),
  popularCategoryCollection: client
    .db("amarstore")
    .collection("popularCategory"),
  latestDealCollection: client.db("amarstore").collection("latestDeal"),
  searchByCategoryCollection: client
    .db("amarstore")
    .collection("searchByCategory"),
  // productCollection: client.db("amarstore").collection("product"),
  // productCollection: client.db("amarstore").collection("product"),
};
