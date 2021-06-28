const express = require("express");
const app = express();
const port = 8089;
const path = require('path')

app.set("views", path.join(__dirname,'views'))
app.set("view engine",'pug');

app.get("/", (req, res) => {
  res.render("template",{
    meta:{
      data:{
        title:'Portfolio',
        description:'Metadata description',
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
