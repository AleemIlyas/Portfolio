import styles from './introduction.module.css'
import { FaLinkedinIn , FaGithub , FaTwitter } from 'react-icons/fa'

export default function introduction(){
    return(
        <div className={styles.main}>
            <div className={styles.Introduction}>
                <h1>Hello 👋 </h1>
                <h2>I'm Aleem Ilyas 
                    <br />
                    Software Engineer
                    <br />
                    And a <span style={{background:'white',color:'blue',fontSize:1+'em'}}>MERN STACK</span>  Developer
                </h2>
            </div>
            <div className={styles.ICON}>
               <a href="https://www.linkedin.com/in/aleem-ilyas-503759199/" target="_blank"><FaLinkedinIn /></a> 
               <a href="https://github.com/AleemIlyas" target="_blank"><FaGithub /></a> 
               <a href="" target="_blank"><FaTwitter /></a> 
            </div>
        </div>
    )
}