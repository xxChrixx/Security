import React from "react";
//import style
import styled from "styled-components";

//framer Motion
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReaveal } from "../animation";

//import image
import segmentazione from "../assets/img/segmentazione.svg";
import codingLogo from "../assets/img/coding.svg";
import Bugs from '../assets/img/bug_fixed.svg';
import crypoto from '../assets/img/authentication.svg';

//import component
import DifeseCard from './DifeseCard'
const DifeseSection = () =>{


    const data = [
        {
            title: "SEGMENTAZIONE",
            text:"La segmentazione è un controllo di protezione potente, che può limitare i danni potenziali in una rete; essa riduce il numero di minacce e limita la quantità di danni permessa da una singola vulnerabilità. La segmentazione consiste nel frammentare le parti fondamentali di una rete, così da evitare compromissioni o malfunzionamenti. Una struttura sicura utilizza più segmenti. L'uso di firewall per interconnettere i segmenti in modo controllato può essere essenziale per la sicurezza.",
            image: segmentazione,
            inverse: false,
        },
        {
            title: "RINDONDANZA",
            text:"Un altro controllo architetturale fondamentale è la ridondanza, che permette di eseguire su più nodi una funzione. La struttura ideale deve presentare due server e utilizzare la cosiddetta modalità failover. In questa modalità i server comunicano con gli altri periodicamente determinando se sono ancora attivi o se uno dei server ha problemi, in tal caso gli altri si occupano dell'elaborazione al suo posto. Così facendo le prestazioni vengono ridotte alla metà in presenza di malfunzionamento, ma l'elaborazione continua ad essere svolta.",
            image: codingLogo,
            inverse: true,
        },
        {
            title: "SINGOLI PUNTI DI ERRORE",
            text:"Per assicurarsi che l'architettura faccia tollerare al sistema malfunzionamenti in modo accettabile (per esempio rallentando l'elaborazione senza interromperla, oppure recuperando e riavviando le transazioni incomplete) si adotta la modalità di cercare i singoli punti di errore, ovvero occorre chiedersi se esiste un singolo punto della rete, che in caso di errore, potrebbe negare l'accesso a tutta la rete o a una parte significativa di essa.",
            image: Bugs,
            inverse: false,
        },
        {
            title: "CRITTOGRAFIA",
            text:"La crittografia è lo strumento più importante per un esperto di sicurezza delle reti, serve a fornire confidenzialità, autenticità, integrità e accesso limitato ai dati. Nelle applicazioni di rete, la crittografia può essere applicata sia tra due host (crittografia di collegamento) sia tra due applicazioni (crittografia end-to-end). Per qualsiasi forma di crittografia le chiavi devono essere consegnate al mittente e al destinatario in modo sicuro.",
            image: crypoto,
            inverse: true,
        }

    ]
    return <DifeseSectionContainer id="Solution"> 
        {
            data.map(item =>  <DifeseCard inverse={item.inverse} title={item.title} text={item.text} image={item.image}/>)
        }
     
    </DifeseSectionContainer>
}


const DifeseSectionContainer = styled(motion.div)`

min-height: 100vh;
width: 100vw;


`


export default DifeseSection;