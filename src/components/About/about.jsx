import styles from './about.module.css'
import { GrHtml5 , GrCss3 , GrReactjs  } from 'react-icons/gr'
import { DiJavascript1 , DiMongodb } from 'react-icons/di'
import { SiNextdotjs , SiExpress , SiFirebase } from 'react-icons/si'

export default function About(){
    return(
        <div className={styles.About} id="About" >
           <div className={styles.Heading}>
                <h1>About ME</h1>
                <p> <span style={{marginLeft:'250px'}} >  </span> I am a full-stack developer with a strong focus on the MERN stack (MongoDB, Express.js, React, and Node.js). I have experience designing and building both web and mobile applications, and am highly skilled in the use of these technologies. My passion for coding and problem solving drives me to stay up-to-date with the latest industry developments and trends, and to continuously improve my skills. I am a team player who thrives in collaborative environments, and am always eager to learn from my peers and mentors.
</p>
            </div>
            <div className={styles.Technologies}>
                <h2>Technologies I use !</h2>
                <ul>
                    <li> <GrHtml5 /> HTML</li>
                    <li> <GrCss3 /> CSS</li>
                    <li> <DiJavascript1/> JAVASCRIPT</li>
                    <li> <GrReactjs/> React</li>
                    <li> <SiExpress/> EXPRESS</li>
                    <li> <DiMongodb/> MONGO DB</li>
                    <li> <SiFirebase/> FIREBASE</li>
                </ul>
            </div>
        </div>
    )
}