import React from "react"

export default function Main() {
    return (
        <main>
            <div className="initro">
                <h1 className="name">Andrej Andrašik ccc</h1> 
                <p className="developer">Frontend Developer</p>
                <p className="website">andrejandrasik.website</p>
                <button onClick={() => window.location = 'mailto:andrasik.andrej@gmail.com'} className="btn"><img src="./images/Icon.png"/>Email</button> 
            </div>
            <div className="facts">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>
                <h3>Interests</h3>
                <p>Dog lover. Active life... exercise, soccer, tennis. Craft beer & craft malt enthusiasm. Coffee or tea, yes. Home pizza and food gurman.</p>
            </div>
        </main>
    )
}