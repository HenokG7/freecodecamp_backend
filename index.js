// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Second challenge
app.get("/api/whoami", (req, res) => {
  let ip = req.ip;
  let lang = req.headers["accept-language"];
  let software = req.headers["user-agent"];

  res.json({ ipaddress: ip, language: lang, software: software });
});
//first challenge
// app.get("/api/:date?", function (req, res) {
//   console.log(req.params.date);
//   if (req.params.date != undefined) {
//     if (req.params.date.length == 13) {
//       //unix is given
//       res.json({
//         unix: parseInt(req.params.date),
//         utc: new Date(parseInt(req.params.date)).toUTCString(),
//       });
//     } else {
//       if (!isNaN(Date.parse(req.params.date))) {
//         let unix = new Date(req.params.date).getTime();
//         res.json({ unix: unix, utc: new Date(parseInt(unix)).toUTCString() });
//       } else {
//         console.log("error");
//         res.json({ error: "Invalid Date" });
//       }
//     }
//   } else {
//     let unix = Date.now();
//     res.json({ unix: unix, utc: new Date().toUTCString() });
//   }
// });

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
