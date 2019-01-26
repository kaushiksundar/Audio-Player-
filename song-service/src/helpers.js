const constants = require("./constants");

const constructITunesTrackUrl = function(params) {
  // if search term is blank then by default set it to "Rahman" - My Favorite :)
  return `${
    constants.ITUNES_OPEN_API_BASE_URL
  }/search?callback=hello&country=IN&media=music&entity=musicTrack&term=${
    params.term ? params.term : "rahman"
  }`;
};

module.exports = {
  constructITunesTrackUrl: constructITunesTrackUrl
};
