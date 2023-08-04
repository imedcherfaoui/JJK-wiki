import React, { useEffect, useState } from 'react';
import imgg from '../../images/Design.mp4'
import './Home.css';
import Typist from 'react-typist';
import { useNavigate } from 'react-router-dom';

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

const Home = ({setSelectedChampion}) => {
    const [champion, setChampion] = useState('Ryomen Sukuna');
    const [openedIndex, setOpenedIndex] = useState(-1);
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

    const handleClick = (index) => {
        if (openedIndex === index) {
            setOpenedIndex(-1);
        } else {
            setOpenedIndex(index);
        }
    };
    const handleClickNavigate = () => {};
    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            i = i < personnages.length - 1 ? i + 1 : 0;
            setChampion(personnages[i].name);
            setCount(count => count + 1);
        }, 5000); // Changer le texte toutes les 5 secondes

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
            <h1 className='text-center text-light' style={{marginTop: '180px', color: '#fff', zIndex: 1, position: 'relative'}}>Sélectionnez votre champion préféré <Typist className='blinking' key={count}>
                    <span>{champion}</span>
                    <Typist.Backspace count={champion.length} delay={2000} />
                </Typist></h1>

            <ul style={{display: 'flex', justifyContent: 'center'}}>
                {
                    personnages.map((personnage, index) => { 
                        return (
                            <li key={index} style={itemStyle(index)} onClick={() => handleClick(index)} className={`mx-2 card ${openedIndex === index ? 'flipped' : ''}`}>
                                <div id={`part${index+1}`} className='images'>
                                    <div className='bw card__face card__face--front'></div>
                                    <div className='color card__face card__face--back'></div>
                                </div>
                                <div className='description'>
                                    <h2>{personnage.name}</h2>
                                    <h3>{personnage.category}</h3>
                                    <p>{personnage.pouvoir}</p>
                                    <div className="d-grid gap-2 col-12 mx-auto mt-5">
                                        <button className={`btn ${index === 0 ? 'btn-outline-warning buttonC' : 'btn-outline-danger'}`} onClick={() => handleClickNavigate()}>En savoir plus</button>
                                    </div>
                                </div>
                            </li>
                    )})
                }
            </ul>
            <div className="d-grid gap-2 col-3 mx-auto fixed-bottom mb-5">
                <button className= "btn btn-outline-success buttonC" onClick={() => navigate('/characters')}>Voir l'ensemble des champions</button>
            </div>
        </section>
    )
}

export default Home
