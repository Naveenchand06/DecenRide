import React from "react";
import Map from "react-map-gl";

const style = {
  wrapper: `flex-1 h-full w-full`,
  main: `h-screen w-screen m-auto`,
};

function App() {
  return (
    <>
      <h1>DecenRide</h1>
      <div className={style.main}>
        <Map
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: 48.121,
            latitude: 9.141,
            zoom: 3.5,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    </>
  );
}
export default App;
