import React from "react";
import Image from "next/image";
import styles from "./Schedule.module.css";

function Schedule() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 style={{ color: "white" }}>Live Show</h2>
        </div>
        <div className={styles.bigBox}>
          <ul className={styles.rowList}>
            <li>
              <div className={styles.colSched}>
                <text>Lundi</text>
              </div>
              <div className={styles.daySched}>
                <ul className={styles.hourList}>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_1c0b9c0e-28b5-4f5d-b2a5-ef22aaf600d6.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_2fe7d821-e453-4f1d-a028-0694328029f6.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_5d2375e0-7b1a-43f4-8707-8d1fce2c345a.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.colSched}>
                <text>Mardi</text>
              </div>
              <div className={styles.daySched}>
                <ul className={styles.hourList}>
                  <div className={styles.Li}>
                    <Image
                      src="/artists/_53ae7473-fdbc-42fa-af26-8ec8b903fe6a.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </div>

                  <li className={styles.Li}>
                    <Image
                      src="/artists/_6fa6ae8c-4387-43e7-af59-260384c7e5a7.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_9c411299-0199-4803-8e98-1c03e1bf7204.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.colSched}>
                <text>Mercredi</text>
              </div>
              <div className={styles.daySched}>
                <ul className={styles.hourList}>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_77ef374f-69b0-4df4-9456-968d1ab3b698.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_826f67ee-7f21-4033-8a86-777c9b2eac5d.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_2145f8f0-e1dd-4575-9116-3e9024b67192.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.colSched}>
                <text>Jeudi</text>
              </div>
              <div className={styles.daySched}>
                <ul className={styles.hourList}>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_6083a273-7f00-45c8-a6af-3695463ec65d.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_14038bd5-b889-4f65-a221-20c506b42353.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_93752f3c-18ef-49f0-b752-9b6d1f86dae5.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.colSched}>
                <text>Vendredi</text>
              </div>
              <div className={styles.daySched}>
                <ul className={styles.hourList}>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_af2958da-5a15-46dc-ab3b-9eee2c227084.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_b2ad83e5-45e2-4b7c-9a89-94f8ea021c80.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_b0617b79-db1a-4ee5-9d91-8474950dc09a.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.colSched}>
                <text>Samedi</text>
              </div>
              <div className={styles.daySched}>
                <ul className={styles.hourList}>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_c527e023-286a-43c0-9775-f5cb2b1ee3a1.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_cbdd4c3d-2a87-4592-8981-1dfdb9cfc216.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_1c0b9c0e-28b5-4f5d-b2a5-ef22aaf600d6.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className={styles.colSched}>
                <text>Dimanche</text>
              </div>
              <div className={styles.daySched}>
                <ul className={styles.hourList}>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_1c0b9c0e-28b5-4f5d-b2a5-ef22aaf600d6.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_1c0b9c0e-28b5-4f5d-b2a5-ef22aaf600d6.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_1c0b9c0e-28b5-4f5d-b2a5-ef22aaf600d6.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.bottomBox}>
          {" "}
          <footer className={styles.footer} />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
