require("dotenv").config()
const express = require("express");

const app = express();

const port = process.env.NODE_PORT;
const appname = process.env.APP_NAME;
const desc = process.env.APP_DESCRIPTION;
const oiuu = process.env.OI_UU;

app.get('/', (req, res) => {
    res.send(`environment variable from aws parameter store and fargate 
    NODE_PORT=${port} \n
    APP_NAME=${appname}
    APP_DESCRIPTION = ${desc}
    OI_UU = ${oiuu}
     `)
  })
  
  

  if(port) {
    app.listen(port, () => {
        console.log(`app listening at http://localhost:${port}`)
      })
  } else {
      console.log("Environment variable not set for NODE_PORT");
      process.abort
  }



