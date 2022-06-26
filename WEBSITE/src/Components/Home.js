import React from "react";
import Mouse from '../images/mouse-2.png'
import "../css/home.css";
import Arnav_pfp from '../images/arnav-pfp.png'
import Kartik_pfp from '../images/kartik-pfp.jpg'
import Amazon from '../images/amazon.png'
import Facebook from '../images/facebook.png'
import Adobe from '../images/adobe.png'
import Google from '../images/google.png'
import McAfee from '../images/mcafee.png'
import Microsoft from '../images/microsoft.png'
import Github from '../images/github.png'
import next_button from '../images/fast-forward.png'
import github_icon from '../images/github-icon.png'
import discord from '../images/discord.png'
import web from '../images/user.png'

export default function App() {
  const next = async () =>{
    const anim = document.getElementById("partner-anim")
    anim.style.animationPlayState = 'running'
    await setTimeout(() =>{
      anim.style.animationPlayState = 'paused'
    }, 2000)
  }
  return(
<div className="home-container">
  <div className="banner">
<div className="info">
  <b>Vortex Technologies</b>
  <p>Gaming Redefined</p>
</div>
<div className="mouse-container">
<img className="mouse" src={Mouse} alt="mouse" />
</div>
</div>
<div className="partners">
  <h1 className="heading-part">OUR PARTNERS</h1>
<div className="partners_alt">
  <div id="partner-anim" className="partners-1 part">
    <div className="partner"><img src={Google} className="partner-img" alt="Google" /></div>
    <div className="partner"><img src={McAfee} className="partner-img" alt="McAfee" /></div>
    <div className="partner"><img src={Github} className="partner-img" alt="Github" /></div>
    <div className="partner"><img src={Microsoft} className="partner-img" alt="Facebook" /></div>
  </div>
  <div className="partners-2 part">
    <div className="partner"><img src={Github} className="partner-img" alt="Github" /></div>
    <div className="partner"><img src={Facebook} className="partner-img" alt="Facebook" /></div>
    <div className="partner"><img src={Adobe} className="partner-img" alt="Adobe" /></div>
    <div className="partner"><img src={Amazon} className="partner-img" alt="Amazon" /></div>
  </div>
  <div className="partners-3 part">
    <div className="partner"><img src={McAfee} className="partner-img" alt="McAfee" /></div>
  <div className="partner"><img src={Amazon} className="partner-img" alt="Amazon" /></div>
    <div className="partner"><img src={Github} className="partner-img" alt="Github" /></div>
    <div className="partner"><img src={Google} className="partner-img" alt="Google" /></div>
  </div>
  <div className="partners-4 part">
    <div className="partner"><img src={Google} className="partner-img" alt="Google" /></div>
    <div className="partner"><img src={Facebook} className="partner-img" alt="Facebook" /></div>
    <div className="partner"><img src={Adobe} className="partner-img" alt="Adobe" /></div>
    <div className="partner"><img src={Microsoft} className="partner-img" alt="Microsoft" /></div>
  </div>
  </div>
  <button className="next" onClick={next}><img src={next_button} alt="next" /></button>
</div>
<h1 className="head-team">OUR TEAM</h1>
<div className="team">
  <div className="arnav card">
    <img src={Arnav_pfp} className='pfp' alt="pfp" /><br/>
    <b>Arnav Gupta</b><br/>
    Owner of <a href="https://spectral.host/">spectral.host</a>
    <div className="about-me">
    <b style={{fontSize:'15px', float:'left'}}>About Me</b><br/>
    <p>Coding Enthusiast & Backend Developer</p>
    </div>
    <div className="socials">
    <a target="_blank" href="https://arnavgupta.me" rel="noreferrer"><img src={web} alt="profile" /></a>
    <a target="_blank" href="https://discordapp.com/users/786172822879600650" rel="noreferrer"><img src={discord} alt="discord" /></a>
    <a target="_blank" href="https://github.com/ArnavGupta30" rel="noreferrer"><img src={github_icon} alt="github" /></a><br/>
    </div>
  </div>
<div className="kartik card">
<img src={Kartik_pfp} className='pfp' alt="pfp" /><br/>
<b>Kartik Arora</b><br/>
    Full Stack Developer
    <div className="about-me">
    <b style={{fontSize:'15px', float:'left'}}>About Me</b><br/>
    <p>Passionate about coding and building websites</p>
    </div><br/>
    <div className="socials">
    <a target="_blank" href="https://kartik.hostkr.xyz" rel="noreferrer"><img src={web} alt="profile" /></a>
    <a target="_blank" href="https://discordapp.com/users/786172822879600650" rel="noreferrer"><img src={discord} alt="discord" /></a>
    <a target="_blank" href="https://github.com/BinaryKartik" rel="noreferrer"><img src={github_icon} alt="github" /></a>
    </div>
</div>
</div>
</div>
)};