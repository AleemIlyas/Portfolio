import React, { useEffect, useState } from "react";
import styles from "./project.module.css";
import { adminInstance } from "../../axios";
import Spinner from "../../components/UI/Spinner/spinner";

export default function Project() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    adminInstance
      .get("/getProjects", { signal: abortController.signal })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => console.log(err));

    return () => {
      abortController.abort();
    };
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className={styles.Container} id="Projects">
      <div className={styles.Heading}>
        <h1>Projects</h1>
      </div>
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <div className={styles.card} key={item._id}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img
                    src={`https://github.com/AleemIlyas/Portfolio-backend/tree/main/Images/${item.image}`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <h3> {item.title} </h3>
                  <br />
                  <p>{item.description.slice(0, 150)}</p>
                  <a href={item.link} target="_blank">
                    Go To App
                  </a>
                  <ul className={styles.Technologies}>
                    {item.technologies.map((tech) => {
                      return <li key={tech}> {tech} </li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className={styles.card}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <img src="/54696.jpg" alt="Iron Man 3"  width={240} height="159" />
                    <h3>Task App</h3><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id neque commodo, ultrices quam a, tempor nulla. </p>
                    <a href="#" >Go To App</a>
                </div>
            </div>
        </div>

        <div className={styles.card}>
             <div className={styles.box}>
                <div className={styles.content}>
                    <img src="/699729.jpg" alt="Thor : Ragnarok"  width={240} height="159" />
                    <h3>Landing Page</h3><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id neque commodo, ultrices quam a, tempor nulla.  </p>
                    <a href="#">Go To App</a>
                </div>
            </div>
        </div> */}
      </div>
    </div>
  );
}
