import Title from "../kit_ux_ui/Title";
import p1 from "../../assets/img/p1.jpg";
import p2 from "../../assets/img/p2.jpg";
import p3 from "../../assets/img/p3.jpg";
import p4 from "../../assets/img/p4.jpg";
import p5 from "../../assets/img/p5.jpg";
import p6 from "../../assets/img/p6.jpg";
import p7 from "../../assets/img/p7.jpg";
import p8 from "../../assets/img/p8.jpg";
import p9 from "../../assets/img/p9.jpg";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function Equipe() {
    const personnes = [{ "prenom": "Florent", "nom": "Nolot", "poste": "Président - Responsable logistique" }, { "prenom": "Thomas", "nom": "Gigout", "poste": "Vice président - Responsable sponsors" }, { "prenom": "Romain", "nom": "Ortega", "poste": "Vice président - Responsable liaison écoles" }, { "prenom": "Louis", "nom": "Baes", "poste": "Vice président - Responsable conférences" }, { "prenom": "Lucie", "nom": "Contal", "poste": "Trésorière" }, { "prenom": "Louis", "nom": "POIDEVIN", "poste": "Secrétaire" }, { "prenom": "Jean-Eudes", "nom": "LHERBIER", "poste": "Responsable communication" }, { "prenom": "Emmanuel", "nom": "Mesnard", "poste": "Responsable challenges" }, { "prenom": "Cyril", "nom": "Rabat", "poste": "Co-responsable logistique" }]

    const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

    return (
        <>
            <section className="w-full min-h-screen flex flex-col px-24 gap-10 justify-center items-center" id="Team">
                <Title
                    title="Equipe HackSecu'R"
                />
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper w-full px-32 pb-10"
                    slidesPerView={3}
                    spaceBetween={10}
                >
                    {personnes.map((personne, index) => (
                        <SwiperSlide key={index} className="flex flex-col relative justify-center items-center">
                            <img src={images[index]} className="rounded-md" alt="Person Image" />
                            <div className="absolute bottom-0 p-4">
                                <h1 className="text-white text-4xl text-center">
                                    {personne.prenom} {personne.nom}
                                </h1>
                                <p className="text-white/90 text-center text-2xl">
                                    {personne.poste}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default Equipe;