import "../styles/tailwind.css";
import React, { useState, useEffect } from "react";
import { getNowPlaying, getTopArtists, getTopTracks } from "./retrieval";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const MyComponent2 = () => {

  const [nowPlayingData, setPlayingData] = useState(null);
  const [topArtistsData, setArtistsData] = useState(null);
  const [topTracksData, setTopTracks] = useState(null);
  const [pdLoad, setLoading] = useState(true);
  const [taLoad, setLoading2] = useState(true);
  const [tLoad, setLoading3] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const firstResult = await getNowPlaying();
        setPlayingData(firstResult);
        setError(null);
      } catch (error) {
        setError(error);
        setPlayingData(null);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000); // refreshes every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const secondResult = await getTopArtists();
        setArtistsData(secondResult);
        const thirdResult = await getTopTracks();
        setTopTracks(thirdResult);
        setError(null);
      } catch (error) {
        setError(error);
        setArtistsData(null);
        setTopTracks(null);
        setLoading2(false);
        setLoading3(false);
      } finally {
        setLoading2(false);
        setLoading3(false);
      }
    };

    fetchData2();
    const intervalId = setInterval(fetchData2, 43200000); // refreshes every 12 hours

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let displayValues;

  let tArtistsData;
  let mapArtItems;

  if (pdLoad || taLoad || tLoad) {
    // loading animation
    displayValues = (
      <Box className="vvs" sx={{ width: "100%" }}>
        <LinearProgress
          sx={{
            backgroundColor: "#858585",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#cfcfcf",
            },
          }}
        />
      </Box>
    );
  } else if (error) {
    // error handling
    displayValues = (
      <p className="mb-2" id="norm-high">
        <span>Spotify Data Offline</span>
      </p>
    );
  } else if (nowPlayingData && topArtistsData && topTracksData) {
    // displays all 3 data if there are no errors

    if (nowPlayingData.playing) {
      displayValues = (
        <div id="PLAYING-WHOLE-DIV">
          <div id="SONG-METADATA" className="vvs flex items-center mb-4">
            <a href={nowPlayingData.album[0].url} target="_about">
              <img
                src={nowPlayingData.album[0].image}
                alt="album art"
                className="h-16 w-16 sm:mr-3 hover:cursor-pointer hover:shadow-xl"
              />
            </a>
            <div
              id="ARTIST-TRACK-NAME-ONLY"
              className="sm:text-xs md:text-base vvs2"
            >
              <p className="truncate">
                <span className="hover:underline cursor-pointer text-black">
                  <a href={nowPlayingData.track[0].url} target="_about">
                    {nowPlayingData.track[0].name}
                  </a>
                </span>
              </p>
              <p>
                <span className="hover:underline cursor-pointer">
                  <a href={nowPlayingData.artist[0].url} target="_about">{nowPlayingData.artist[0].name}</a>
                </span>
              </p>
            </div>
            {/* ball animation */}
            <div className="vvs">
              <div className="relative inline-flex h-3 w-3 sm:ml-2 md:ml-8">
                <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-cugray opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cugray"></span>
              </div>
            </div>
          </div>

          <p className="mt-2">
            <span id="norm-high">My Favorite Artists</span>
          </p>
          <div className="flex mt-2 gimme-top sm:text-xs sm:mb-3 sm2:text-base md:mb-5 md:text-base">
            <ol className="columns-2 md:gap-24 sm:gap-10 list-decimal list-inside">
              {Object.keys(topArtistsData).map((key) =>
                topArtistsData[key].map((artist) => (
                  <li>
                    <span
                      className="hover:cursor-pointer hover:underline"
                    >
                      <a href={artist.url} target="_about">{artist.name}</a>
                    </span>
                  </li>
                ))
              )}
              <div start="6" className="sm:ml-4 md:ml-18"></div>
            </ol>
          </div>

          <p>
            <span id="norm-high">What's Been On Repeat</span>
          </p>
          <div className="flex mt-2 gimme-top sm:text-xs sm2:text-base md:text-base">
            <ol className="list-inside list-decimal">
              {Object.keys(topTracksData).map((key) =>
                topTracksData[key].map((track) => (
                  <li>
                    <span
                      className="hover:cursor-pointer hover:underline"
                    >
                      <a href={track.url} target="_about">{track.name}</a>
                    </span>
                  </li>
                ))
              )}
            </ol>
          </div>
        </div>
      );
    } else if (!nowPlayingData.playing && topArtistsData && topTracksData) {
      displayValues = (
        <div>
          <p id="norm-high">
            <span>Spotify Offline - Not Listening</span>
          </p>
          <p className="mt-4">
            <span className="underline underline-offset-4">My Favorite Artists</span>
          </p>

          {/* offline top artists data */}
          <div className="flex mt-2 gimme-top sm:text-xs sm:mb-3 sm2:text-base md:mb-5 md:text-base">
            <ol className="columns-2 md:gap-24 sm:gap-10 list-decimal list-inside">
              {Object.keys(topArtistsData).map((key) =>
                topArtistsData[key].map((artist) => (
                  <li>
                    <span
                      className="hover:cursor-pointer hover:underline"
                    >
                      <a href={artist.url} target="_about">{artist.name}</a>
                    </span>
                  </li>
                ))
              )}
            </ol>
          </div>

          <p>
            <span className="underline underline-offset-4">
              What's Been On Repeat
            </span>
          </p>
          <div className="mt-2 gimme-top sm:text-xs sm2:text-base md:text-base">
            <ol className="list-inside list-decimal">
              {Object.keys(topTracksData).map((key) =>
                topTracksData[key].map((track) => (
                  <li>
                    <span
                      className="hover:cursor-pointer hover:underline"
                    >
                      <a href={track.url} target="_about">{track.name}</a>
                    </span>
                  </li>
                ))
              )}
            </ol>
          </div>
        </div>
      );
    }
  }
  return <div className="">{displayValues}</div>;
};

export default MyComponent2;
