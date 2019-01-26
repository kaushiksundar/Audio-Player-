const ITUNES_OPEN_API_BASE_URL = "https://itunes.apple.com";
const track_search_path = `${ITUNES_OPEN_API_BASE_URL}/search?callback=hello&country=IN&media=music&entity=musicTrack&term=rahman`;
const SAMPLE_SONG = `https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/77/49/90/77499011-b8a6-4bf8-dc18-3743f27ce8e2/mzaf_3528161656050117470.plus.aac.p.m4a`;

// https://itunes.apple.com/search?call&media=music&country=US&entity=musicArtist&term=happ

module.exports = {
  ITUNES_OPEN_API_BASE_URL: ITUNES_OPEN_API_BASE_URL,
  track_search_path: track_search_path,
  SAMPLE_SONG: SAMPLE_SONG
};
