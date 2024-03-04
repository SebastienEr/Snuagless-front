import styles from "../styles/Home.module.css";

function Player() {
  return (
    <div className={styles.player}>
      <iframe
        src="https://player.radioking.io/radio-snuagless/?c=%237023FF&c2=%23FFFFFF&f=v&i=1&p=1&s=0&li=1&popup=1&plc=NaN&h=365&l=undefined&v=2"
        style="border-radius: 5px; width: 275px; height: 365px; "
        frameBorder="0"
      ></iframe>
      <script
        type="text/javascript"
        src="https://player.radioking.io/scripts/iframe.bundle.js"
      ></script>
    </div>
  );
}

export default Player;
