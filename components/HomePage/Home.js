import Chat from "./Chat";
import Header from "./Header";
import styles from "./Home.module.css";
import Program from "./Program";
import Image from "next/image";
import Schedule from "./Schedule";

function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <Program />
          <Image
            width={300}
            src={require("../../public/images/mascotte1.png")}
          />
          <Chat />
        </div>
        <Schedule />
      </main>
    </div>
  );
}

export default Home;
