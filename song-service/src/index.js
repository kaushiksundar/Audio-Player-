// Libraries or external pacakges
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
// Custom modules
const config = require("./config");
const helpers = require("./helpers");

// Constants and variables
const app = express();
const PORT = config.PORT;
const NODE_ENV = config.NODE_ENV;
const useItunesOpenAPI = true;
const constants = require("./constants");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// Middleware to log the request details
app.use(function(req, res, next) {
  console.log("\n\n=== Path ===");
  console.log(req.path);
  console.log("=== Params ===");
  console.log(req.query);
  console.log("\n\n"); // populated!
  next();
});

// Purpose: Service to test check if the service is up and running
app.get("/", (req, res) =>
  res.send(
    `Song Service running. This is a development ${NODE_ENV} environment running in port ${PORT}. `
  )
);

// Purpose: API to Get the list of songs
app.get("/getTracks", async function(req, res) {
  try {
    if (useItunesOpenAPI) {
      const response = await axios.get(
        helpers.constructITunesTrackUrl(req.query)
      );
      // The open api requires a mandatory "callback" paramter.
      // API Documentation: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
      // I have hardcoded it as hello and removing the first 6 charaters and the last to characters to get the actual iTunes response
      // Once the Frontend is ready I can pass this as it is and trigger a client side funtion named hello that would update the redux store
      // TODO: I need to rename the hello method in the client side. Needs cleanup
      // Clarification: Need to check with "Brice" on whether the itunes data has to be stored on this side to prevent API calls for already requested serach term
      res.send(
        JSON.parse(
          response.data
            .trim()
            .substr(6)
            .slice(0, -2)
        )
      );
    } else {
      console.warn("\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.warn("!!!!!!!!! iTunes API is not enabled !!!!!!!!!");
      console.warn("!!!!!!!! I am missing the Bouns task !!!!!!!!");
      console.warn("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n");
      const songs = require("./tracks.json");
      res.send(songs);
    }
  } catch (err) {
    throw err;
  }
});

// Purpose: API to Get the Song URL from S3/Dropbox/Google Drive based on chosen track by User
// TODO: Need to have an authentication middleware to check if the user is logged in before allowing to access the song
// This is the prerequiste for the websocket bonus task. With user info we could track what the user is currently listening to
app.get("/getFullTrack", async function(req, res) {
  try {
    const trackID = req.query.tarckID || 1234; // Hard code the track ID to 1234 if there is no paramter
    // TODO: With the trackId construct the Google Drive or DropBox URL and send it back.
    // The track id -> song url mapping has to be persisted somewhere (either in a DB or in a JSON file)
    // I will be missing a bonus task if I don't implement this
    // === CLARIFICATION : NEED TO CHECK WITH "BRICE" on whether this approach can be taken ===
    // For now hard code the URL with one the iTunes Privew song url
    res.send({
      track_id: 1234,
      url: constants.SAMPLE_SONG
    });
  } catch (err) {
    throw err;
  }
});

app.get("");

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
