import React from 'react'
import "../Character/CharacterPage.css"
import HomeBg from "../../images/HomeBg.jpeg"

function Home() {

    const pageStyle = {
        background: `url(${HomeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
    };
    
      const mobileStyle = {
        ...pageStyle,
        backgroundSize: "contain",
    };

    return (
        <>
            <div style={pageStyle} className="desktop-image"></div>
            <div style={mobileStyle} className="mobile-image"></div>
        </>
    )
}

export default Home