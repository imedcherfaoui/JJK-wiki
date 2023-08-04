import React, { useEffect, useState } from 'react';
import imgg from '../../images/Design.mp4'
import './Home.css';

const personnages = [
    {
        name: 'Ryomen Sukuna',
        category: "Fléaux",
        pouvoir: "sort d'inversion"
    },
    {
        name: "Satoru Gojo",
        category: "Exorciste",
        pouvoir: "Le Sixième Œil"
    },
    {
        name: "Megumi Fushiguro",
        category: "Exorciste",
        pouvoir: "Chiens de Jade"
    },
    {
        name: "Kenjaku (Suguru Geto)",
        category: "Exorciste",
        pouvoir: "Transfert de cerveau"
    },
    {
        name: "Yiju Itadori",
        category: "Exorciste",
        pouvoir: "Endurance et Résistance"
    }
]

function Home() {

    const [champion, setChampion] = useState('Ryomen Sukuna');
    const [openedIndex, setOpenedIndex] = useState(-1);

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
            i = i < personnages.length - 1 ? i + 1 : 0;
            setChampion(personnages[i].name);
        }, 3000); // Changer le texte toutes les 3 secondes

        return () => clearInterval(intervalId); // Nettoyer l'intervalle lors du démontage du composant
    }, []);

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
                <h1 className='blinking text-center text-light' style={{marginTop: '180px'}}>Sélectionnez votre champion préférer <span style={champion === 'Ryomen Sukuna' ? {color: 'yellow'} : {color: 'red'}}>{champion}</span></h1>
            <ul style={{display: 'flex', justifyContent: 'center'}}>
                {
                    personnages.map((personnage, index) => { 
                        return (
                            <li key={index} style={itemStyle(index)} onClick={() => handleClick(index)} className={`mx-1 card ${openedIndex === index ? 'flipped' : ''}`}>
                                <div id={`part${index+1}`} className='images'>
                                    <div className='bw card__face card__face--front'></div>
                                    <div className='color card__face card__face--back'></div>
                                </div>
                                <div className='description'>
                                    <h2>{personnage.name}</h2>
                                    <h3>{personnage.category}</h3>
                                    <p>{personnage.pouvoir}</p>
                                    <div className="d-grid gap-2 col-12 mx-auto mt-5">
                                        <button className={`btn ${index === 0 ? 'btn-outline-warning' : 'btn-outline-danger'}`}>En savoir plus</button>
                                    </div>
                                </div>
                            </li>
                    )})
                }
            </ul>
            
        </section>
    )
}

export default Home
