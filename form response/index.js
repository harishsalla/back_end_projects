// const express = require("express");
// const app = express();
// const csvtojson = require("csvtojson");
// const { google } = require("googleapis");
// const port = 3000;
// app.use(express.json());
// const credentials = require("./credentials.json");
// const { client_secret, client_id, redirect_uris } = credentials.web;
// const oAuth2Client = new google.auth.OAuth2(
//   client_id,
//   client_secret,
//   redirect_uris[0]
// );
// const TOKEN_PATH = "./token.json";
// const cors = require("cors");
// app.use(cors({ origin: "*" }));

// async function authorize() {
//   try {
//     const token = require(TOKEN_PATH);
//     oAuth2Client.setCredentials(token);
//   } catch (error) {
//     console.error("Error loading tokens:", error.message);
//   }
// }

// async function fetchData(spreadsheetId, range) {
//   try {
//     await authorize();

//     const sheets = google.sheets({ version: "v4", auth: oAuth2Client });

//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId: spreadsheetId,
//       range: range,
//     });

//     const csvData = response.data.values.join("\n");

//     // Convert CSV to JSON
//     const jsonData = await csvtojson().fromString(csvData);

//     return jsonData;
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     throw error;
//   }
// }

// app.get("/oauth2callback", async (req, res) => {
//   try {
//     const { spreadsheetId, range } = req.query;

//     if (!spreadsheetId || !range) {
//       return res
//         .status(400)
//         .json({ error: "Missing spreadsheetId or range in query parameters" });
//     }

//     const jsonData = await fetchData(spreadsheetId, range);

//     if (jsonData.length) {
//       console.log("Data from Google Sheet:", jsonData);
//       res.json({ data: jsonData });
//     } else {
//       console.log("No data found.");
//       res.json({ error: "No data found" });
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.post("/submit-form", async (req, res) => {
//   console.log("first _point");
//   try {
//     // const formData = req.body;
//     console.log(req.body, "Body");
//     // console.log('Form data received and stored:', formData);
//     return res
//       .json({ success: true, message: "Received response" })
//       .status(200);
//   } catch (error) {
//     console.error("Error processing form data:", error.message);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// GET endpoint to log data
app.get('/logData', (req, res) => {
  const receivedData = req.body;

  // Log the received data
  console.log('Received Data:', receivedData);

  // Send a response without storing in the database
  res.json({ message: 'Data logged successfully', receivedData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
