import React from "react";
import Image from "next/image";
import styles from "./Schedule.module.css";

function Schedule() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 style={{ color: "white" }}>Live Show</h2>
          <Image src={require("../../public/images/radioschedule.png")} />
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
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
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
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
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
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
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
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
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
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
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
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
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
                    <div>
                      <text>8h</text>
                    </div>
                    <div>
                      <text>Morning</text>
                    </div>
                  </li>
                  <li className={styles.Li}>
                    <div>
                      <text>9h</text>
                    </div>
                    <div>
                      <text>Infos LOL</text>
                    </div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
                  </li>
                  <li className={styles.Li}>
                    <div></div>
                    <div></div>
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
