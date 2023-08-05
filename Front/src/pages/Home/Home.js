import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgg from '../../images/Design.mp4'
import './Home.css';

function Home({ characters, onCharacterSelect }) {

    const [champion, setChampion] = useState('Sukuna');
    const [openedIndex, setOpenedIndex] = useState(-1);
    const navigate = useNavigate();

    const handleClick = (index) => {
        if (openedIndex === index) {
            setOpenedIndex(-1);
        } else {
            setOpenedIndex(index);
        }
    };

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            i = i < characters?.length - 1 ? i + 1 : 0;
            if (characters && characters[i]) {
                setChampion(characters[i].firstname);
            }
        }, 3000); // Change the text every 3 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, [characters]);

    const handlePlusClick = (firstname) => {
        onCharacterSelect(firstname);
        navigate(`/characters/${firstname}`);
    };

    const itemStyle = (index) => {
        if (openedIndex === index) {
            return {
                width: 381,
            };
        } else {
            return {
                width: 140,
            };
        }
    };

    return (
        <section id='main-menu' className='home'>
                <video src={imgg} muted loop autoPlay></video>
                <h1 className='blinking text-center text-light' style={{marginTop: '100px'}}>Sélectionnez votre champion préférer <span style={(champion === 'Kenjaku' || champion === 'Sukuna') ? {color: 'yellow'} : {color: 'red'}}>{champion}</span></h1>
            <ul style={{display: 'flex', justifyContent: 'center'}}>
                {characters.map((personnage, index) => { 
                    const isFleau = personnage.category === 'Fléau';
                    
                    return (
                        <li key={index} style={itemStyle(index)} onClick={() => handleClick(index)}
                        className={`mx-1 card ${openedIndex === index ? 'flipped' : ''} ${isFleau ? 'fleau' : ''}`}
                        >
                            <div id={`part${index+1}`} className='images'>
                                <div className='bw card__face card__face--front'></div>
                                <div className='color card__face card__face--back'></div>
                            </div>
                            <div className='description'>
                                <h2>{personnage.firstname}</h2>
                                <h3>{personnage.category}</h3>
                                <p>{personnage.skill}</p>
                                <div className="d-grid gap-2 col-12 mx-auto mt-5">
                                    <button onClick={() => handlePlusClick(personnage.firstname)} className={`btn ${index === 0 ? 'btn-outline-warning' : 'btn-outline-danger'}`}>En savoir plus</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Home;
