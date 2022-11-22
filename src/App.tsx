import "./App.css";
import { animated, useSpring } from "react-spring";
import { useState } from "react";

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
        marginTop: "25%",
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
        }}
      ></animated.div>
      <div
        style={{
          marginTop: "32px",
          display: "flex",
          alignItems: "center",
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
      </div>
    </div>
  );
}

export default App;
