import ChatView from "./ChatView";
import Header from "./Header";
import styles from "./Home.module.css";
import Program from "./Program";
import Schedule from "./Schedule";
import Player from "./player";
import Poulpy from "./Poulpy";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user.value);

  console.log(user);
  return (
    <div className={styles.tout}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <Program />
          {/* <Poulpy /> */}
          <ChatView />
        </div>
        <Player />
        <Schedule />
      </main>
    </div>
  );
}

export default Home;
