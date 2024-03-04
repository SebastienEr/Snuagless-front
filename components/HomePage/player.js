import styles from "../HomePage/Home.module.css";

function Player() {
  return (
    <>
      <iframe
        src="https://player.radioking.io/radio-snuagless/?c=%237023FF&c2=%23FFFFFF&f=h&i=1&p=1&s=0&li=1&popup=1&plc=NaN&h=undefined&l=470&v=2"
        style={{ borderRadius: "5px", width: "90%", height: "20vh" }}
        frameBorder="0"
      ></iframe>
      <script
        type="text/javascript"
        src="https://player.radioking.io/scripts/iframe.bundle.js"
      ></script>
    </>
  );
}

export default Player;
