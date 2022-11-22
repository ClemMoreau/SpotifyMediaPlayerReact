import "./App.css";
import { animated, useSpring } from "react-spring";
import { useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

const TOKEN =
  "BQCkMnd3gEb5UcEdIL42uucK1TVsV1KOX7Fx6IYVTQ7HghJ6DosdEDrvDQuMECBOWDMEE_VfjZkUld3nBhKkPL5RcvkAt2gb58zBgBNgkvssGLb4QzSMM8cfZ23BlvJGwtEuut9E31A_2TbjqGaTLmrAbR3JmkzCVv13c486-psS10tViTJT7FpPOSSrrwXVq7z28O-p5AlKi8if2TwCRS-mAJxbNg";

function App() {
  const [BPM, setBPM] = useState(180);

  const props = useSpring({
    loop: true,
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.2)" },
    config: { frequency: 60 / BPM },
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%",
        flexDirection: "column",
      }}
    >
      <animated.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: "solid #166BE5 5px",
          ...props,
          margin: "64px 0",
        }}
      ></animated.div>
      <div
        style={{
          display: "flex",
          alignItems: "space-around",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="range"
          value={BPM}
          min={0}
          max={420}
          step={1}
          onChange={(e) => {
            setBPM(parseInt(e.target.value));
          }}
        />
        <div>{BPM}</div>
        <div>
          <SpotifyPlayer
            token={TOKEN}
            uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
