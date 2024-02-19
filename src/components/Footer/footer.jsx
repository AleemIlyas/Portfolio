import styles from './footer.module.css'
import {Link} from 'react-router-dom'
import { FaLinkedinIn , FaGithub , FaTwitter } from 'react-icons/fa'

export default function Footer(){
    return(
        <div className={styles.Footer} id="Contact">
            <div className={styles.Title}>
                <p>Contact.</p>
                <h1> Let's get in Touch
                    <br /> And work Together ! </h1>
            </div>
            <div className={styles.contact}>
              <Link to="/Contact"> Send Me a Email ! </Link>
              <div className={styles.ICON}>
               <a href="https://www.linkedin.com/in/aleem-ilyas-503759199/" target="_blank"><FaLinkedinIn /></a> 
               <a href="https://github.com/AleemIlyas" target="_blank"><FaGithub /></a> 
               <a href="" target="_blank"><FaTwitter /></a> 
            </div>
            <p>Developed by Aleem Ilyas</p>
            </div>
        </div>
    )
}