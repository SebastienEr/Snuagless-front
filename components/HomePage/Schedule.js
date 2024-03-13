import React from "react";
import Image from "next/image";
import styles from "./Schedule.module.css";
import { useState, useEffect } from "react";

function Schedule() {
  const [eventsAtNineHour, setEventsAtnineHour] = useState([]);
  const [eventsAtNoon, setEventsAtNoon] = useState(null);
  const [eventsAtNight, setEventsAtNight] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/events/getevents")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.programmes);

        for (let i of data.programmes) {
          if (new Date(i.started_at).getHours() < 14) {
            // 9h
            setEventsAtnineHour(i);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });

    fetch("http://localhost:3000/events/getevents")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.programmes);

        for (let i of data.programmes) {
          if (new Date(i.started_at).getHours() < 17) {
            //12h
            setEventsAtNoon(i);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });

    fetch("http://localhost:3000/events/getevents")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.programmes);

        for (let i of data.programmes) {
          if (new Date(i.started_at).getHours() > 20) {
            //22h
            setEventsAtNight(i);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  console.log("this", eventsAtNineHour);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 style={{ color: "white", fontFamily: "Press Start 2P, system-ui" }}>
          Programme de la semaine
        </h2>
        {/*  <Image src="./images/radioschedule.png" /> */}
      </div>

      <ul className={styles.rowList}>
        <li>
          <div className={styles.colSched}>
            <text>Lundi</text>
          </div>
          <div className={styles.daySched}>
            <ul className={styles.hourList}>
              {[eventsAtNineHour].map((data) => {
                return (
                  <li className={styles.Li}>
                    <Image
                      src="/artists/_1c0b9c0e-28b5-4f5d-b2a5-ef22aaf600d6.jpg" /* Ajoutez le chemin correct */
                      className={styles.bigPicture1}
                      width={"190vh"}
                      height={"190vh"}
                    />
                    <div styles={styles.Litext}>
                      <text>9H - {data.title} </text> {/*Lundi 9h*/}
                    </div>
                  </li>
                );
              })}

              <li className={styles.Li}>
                <Image
                  src="/artists/_2fe7d821-e453-4f1d-a028-0694328029f6.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>12 - MORNING NEWS</div>{" "}
                {/* Lundi 12h*/}
              </li>
              <li className={styles.Li}>
                {[eventsAtNineHour].map((data) => {
                  return (
                    <li className={styles.Li}>
                      <Image
                        src="/artists/_5d2375e0-7b1a-43f4-8707-8d1fce2c345a.jpg" /* Ajoutez le chemin correct */
                        className={styles.bigPicture1}
                        width={"190vh"}
                        height={"190vh"}
                      />
                      <div styles={styles.Litext}>
                        <text>9H - {data.title} </text> {/*Lundi 9h*/}
                      </div>
                    </li>
                  );
                })}
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
                {[eventsAtNineHour].map((data) => {
                  return (
                    <li className={styles.Li}>
                      <Image
                        src="/artists/_53ae7473-fdbc-42fa-af26-8ec8b903fe6a.jpg" /* Ajoutez le chemin correct */
                        className={styles.bigPicture1}
                        width={"190vh"}
                        height={"190vh"}
                      />
                      <div styles={styles.Litext}>
                        <text>9H - {data.title} </text>
                      </div>
                    </li>
                  );
                })}
              </div>
              <li className={styles.Li}>
                <Image
                  src="/artists/_6fa6ae8c-4387-43e7-af59-260384c7e5a7.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
              </li>
              <li className={styles.Li}>
                <Image
                  src="/artists/_9c411299-0199-4803-8e98-1c03e1bf7204.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
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
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
              </li>
              <li className={styles.Li}>
                <Image
                  src="/artists/_826f67ee-7f21-4033-8a86-777c9b2eac5d.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
              </li>
              <li className={styles.Li}>
                <Image
                  src="/artists/_2145f8f0-e1dd-4575-9116-3e9024b67192.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"200vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
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
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
              </li>
              <li className={styles.Li}>
                <Image
                  src="/artists/_ffb4c084-cae7-4185-a495-50e851b30d3d.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
              </li>
              <li className={styles.Li}>
                <Image
                  src="/artists/_93752f3c-18ef-49f0-b752-9b6d1f86dae5.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
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
                  src="/artists/_d23e7961-31c4-42e0-b055-bd281315581b.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
              </li>
              <li className={styles.Li}>
                <Image
                  src="/artists/_b2ad83e5-45e2-4b7c-9a89-94f8ea021c80.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
              </li>
              <li className={styles.Li}>
                <Image
                  src="/artists/_b0617b79-db1a-4ee5-9d91-8474950dc09a.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
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
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
              </li>
              <li className={styles.Li}>
                <Image
                  src="/artists/_fa828fbd-93ae-4c0c-b338-b2181e598afe.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
              </li>
              <li className={styles.Li}>
                <Image
                  src="/artists/_d17745f4-f80f-4ecc-9832-4edfb32507d2.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
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
                  src="/artists/_dc366b50-1565-4f94-9e1c-7b58f386262b.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
              </li>
              <li className={styles.Li}>
                <Image
                  src="/artists/_df9b4425-a8c5-439a-ae28-646701305662.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
              </li>
              <li className={styles.Li}>
                <Image
                  src="/artists/_e6963f07-0fd5-47e1-8dec-e2d1dc830a77.jpg" /* Ajoutez le chemin correct */
                  className={styles.bigPicture1}
                  width={"190vh"}
                  height={"190vh"}
                />
                <div styles={styles.Litext}>
                  <text>9H - MORNING NEWS</text>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Schedule;
