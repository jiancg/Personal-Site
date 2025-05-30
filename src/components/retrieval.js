const getNowPlaying = async () => {
  try {
    const response = await fetch("https://example.com/now-playing");
    if (!response.ok) {
      throw new Error("Unknown Error Getting Now Playing");
    }
    return await response.json();
  } catch (error) {
    console.error("NOW PLAYING API DOWN", error);
    throw error;
  }
};

const getTopArtists = async () => {
  try {
    const response = await fetch("https://example.com/top-artists");
    if (!response.ok) {
      throw new Error("Unknown Error Getting Top Artists");
    }
    return await response.json();
  } catch (error) {
    console.error("TOP ARTISTS API DOWN", error);
    throw error;
  }
};

const getTopTracks = async () => {
  try {
    const response = await fetch("https://example.com/top-tracks");
    if (!response.ok) {
      throw new Error("Unknown Error Getting Top Tracks");
    }
    return await response.json();
  } catch (error) {
    console.error("TOP TRACKS API DOWN", error);
    throw error;
  }
};

export { getNowPlaying, getTopArtists, getTopTracks };
