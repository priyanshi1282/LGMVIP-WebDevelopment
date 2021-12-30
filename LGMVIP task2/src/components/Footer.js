import React from "react"
import './Footer.css'

export default function Footer(){
    return (
        <>
        <footer>
        <p id="p1">Created by <span id="credit"> Priyanshi Agrawal</span></p>
      <p className="social">
        <a target="_blank" href="https://www.linkedin.com/in/priyanshi-agrawal-88b6341bb">LinkedIn</a>|
        <a target="_blank" href="https://github.com/priyanshi1282">GitHub</a>|
        <a target="_blank" href="https://www.instagram.com/priyanshiagrawal1282/">Instagram</a>|
        <a target="_blank" href="https://twitter.com/priyanshi1282">Twitter</a>|
        <a target="_blank" href="mailto:priyanshiagrawal1282@gmail.com">Email</a>
    </p>
        </footer>
        </>
    )
}