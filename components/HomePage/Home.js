import ChatView from "./ChatView";
import Header from "./Header";
import styles from "./Home.module.css";
import Program from "./Program";
import Schedule from "./Schedule";
import Player from "./player";
import Poulpy from "./Poulpy";

function Home() {
  return (
    <div className={styles.tout}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <Program />
          {/* <Poulpy /> */}
          {/* <Image
            width={300}
            src={require("../../public/images/mascotte1.png")}
          /> */}
          <ChatView />
        </div>
        <Player />
        <Schedule />
      </main>
    </div>
  );
}

export default Home;
