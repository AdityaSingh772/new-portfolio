"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";
import { FaCss3, FaHtml5, FaJava, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import {TbBrandAndroid, TbBrandBootstrap, TbBrandCpp, TbBrandDjango, TbBrandGit, TbBrandGithub, TbBrandNextjs, TbBrandNodejs, TbBrandOpenai, TbBrandPython, TbBrandTailwind, TbBrandVscode} from "react-icons/tb"
import { SiEthereum, SiMongodb, SiNodedotjs, SiAndroidstudio, SiDocker, SiGo, SiOpenai, SiPostman } from "react-icons/si";


export default function Home() {
  let scriptURL = "https://script.google.com/macros/s/AKfycby_8xrLs_ZlOSQKnXOUIw6LL2tdVIRnu-auh3ohyzvhns5wLjW_wEPVYpJK4U1KSoM/exec"
  let handleSubmit=  async function (e){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
  fetch(scriptURL, { method: 'POST', body: formData})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  }

  return (
    <>
      
      <div className={styles.area} >
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <div id="home" className={styles.home}>
        <div className={styles.intro}>
          <div className={styles.bigText}>
            Hey, its <span className={styles.specialText}>Aditya Singh</span>
          </div>
          <div className={styles.smallText}>
            <div className={styles.line}>Backend developer focused on scalable microservices and seamless Web3 integration.</div>
          </div>
        </div>
      </div>

      <div id="about" className={styles.about}>
        <div className={styles.aboutSection}>

          <div className={styles.bigText2}>
            <span className={styles.specialText}>About Me</span>
          </div>

          <div className={styles.textSubsection}>

            <div className={styles.leftSubsection}>
              <div className={styles.subSectionTitle}>
              Who am I?
              </div>
              <div className={styles.smallText2}>
              I am a backend specialist who thrives on building the unseen—scalable microservices, rock-solid APIs,
               and seamless Web3 integrations that power ambitious products.
               From idea to deployment, I bring a startup mindset, clean architecture, and a relentless
                focus on performance and reliability.<br></br>
                 <br></br>With hands-on experience in Go, Docker, PostgreSQL, and Solidity, I don’t just write code—I build systems that scale, adapt, and deliver.
                  If you are building something bold, I am here to help make it real.
                Lets collaborate.
              </div>
            </div>
            <div className={styles.rightSubsection}>
              <div className={styles.subSectionTitle}>
                Skills
              </div>
              <div className={styles.skillsSection}>
                <div className={styles.row}>
                  <div className={styles.skills}>
                    <SiGo></SiGo>
                  </div>
                  <div className={styles.skills}>
                    <SiDocker></SiDocker>
                  </div>
                  <div className={styles.skills}>
                    <IoLogoJavascript />
                  </div>
                  <div className={styles.skills}>
                    <SiPostman></SiPostman>
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.skills}>
                    <TbBrandNextjs></TbBrandNextjs>
                  </div>
                  <div className={styles.skills}>
                    <SiMongodb></SiMongodb>
                  </div>
                  <div className={styles.skills}>
                    <TbBrandNodejs />
                  </div>
                  <div className={styles.skills}>
                    <SiEthereum />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.skills}>
                    <TbBrandPython />
                  </div>
                  <div className={styles.skills}>
                    <TbBrandCpp />
                  </div>
                  <div className={styles.skills}>
                    <SiOpenai />
                  </div>
                  <div className={styles.skills}>
                    <FaJava />
                  </div>
                </div>
                
                <div className={styles.row}>
                  
                  <div className={styles.skills}>
                    <TbBrandGit />
                  </div>
                  <div className={styles.skills}>
                    <TbBrandGithub />
                  </div>
                  <div className={styles.skills}>
                    <TbBrandVscode />
                  </div>
                  <div className={styles.skills}>
                    <SiAndroidstudio />
                  </div>
                </div>

                

              </div>
            </div>


          </div>
        </div>
      </div>

      <div id="portfolio" className={styles.portfolio}>
        <div className={styles.coverPortfolio}>
        <div className={styles.projects}>
          <div className={styles.bigText2}>
          <span className={styles.specialText}>
          Portfolio
          </span>
          </div>
          <div className={styles.sectionIntro}>
            My last two Projects :
          </div>

          <div className={styles.projectBanner}>
          <div className={styles.projectCard}>
            <div className={styles.projectImg}>
            <img src="/cicd.png" width={380} height={200} className={styles.images}></img>
            </div>
            <div className={styles.projectDetail}>
            <b>CI / CD Genie</b>, Our AI engine scans your repo, suggests optimal workflows, and instantly builds ready-to-use configs for GitHub Actions, GitLab CI, or Jenkins with minimal effort.
            </div>
            <div className={styles.projectView}>
            <a href="https://github.com/AdityaSingh772/CI-CD-Gennie"><div className={styles.viewProject}>View Project</div></a>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectImg}>
            <img src="/crowd.png" width={380} height={200} className={styles.images}></img>
            </div>
            <div className={styles.projectDetail}>
            <b>CrowdShip App</b>, an AI driven shipping platform that connects shippers and carriers, enabling real-time tracking and secure transactions.
            Benifit of Environment, carriers and shippers. 
            </div>
            <div className={styles.projectView}>
            <a href="https://github.com/AdityaSingh772/crowd-shipping-expo"><div className={styles.viewProject}>View Project</div></a>
            </div>
          </div>


          
          </div>
          <a href="https://github.com/AdityaSingh772">
          <div className={styles.viewMore}>View More!</div>
          </a>
        </div>
        </div>
      </div>

      <div id="contact" className={styles.contact}>
        <div className={styles.bigText2}> <span className={styles.specialText}>Contact Me!</span> </div>
      < div className={styles.contactForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" id="Name" placeholder="Your name" className={styles.formInput} required></input>
          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" id="Email" className={styles.formInput}  placeholder="Your Email" required></input>
          <label htmlFor="Msg">Message</label>
          <textarea name="Msg" id="Msg" rows={7} cols={50} placeholder="Your Message" className={styles.formInput} required></textarea>
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
      </div>
      <div className={styles.contactUpper}>
        <div className={styles.Left}>
          <div className={styles.contactTitle}>
            ADITYA SINGH
          </div>
          <div className={styles.contactInfo}>
          Email: workwithracian@gmail.com <br></br>
          Institute: National Institute of Technology Rourkela
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
            Socials
          </div>
          <div className={styles.socialsIcon}>
          <a href="https://github.com/AdityaSingh772"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/aditya-singh-dsa/"><FaLinkedin /></a>
          <a href="https://www.instagram.com/ft.adityas"><FaInstagram /></a>

          </div>
          <div className={styles.email}>
          <MdEmail /> : workwithracian@gmail.com
          </div>
        
        </div>

        
      </div>
      <div className={styles.contactlower}>
          © Copyright 2025. Made with ❤️ by Aditya Singh
        </div>
      </div>

    </>
  );
}
