import Title from "../kit_ux_ui/Title";
import TitleSecond from "../kit_ux_ui/TitleSecond";
import Paragraph from "../kit_ux_ui/Paragraph";
import journalCode from "../../assets/img/journal-code.svg"
import question from "../../assets/img/question-lg.svg"
import geo from "../../assets/img/geo-alt.svg";
import calendar from "../../assets/img/calendar4-event.svg"
import person from "../../assets/img/person.svg";
import chat from "../../assets/img/chat-dots.svg";
import house from "../../assets/img/house-door.svg";
import friday from "../../assets/img/calendar-day.svg";
import flag from "../../assets/img/flag.svg";
import megaphone from "../../assets/img/megaphone.svg";
import rumps from "../../assets/img/person-video3.svg";

function About() {
    return (
        <>
            <section className="w-full min-h-screen flex flex-col px-24 gap-4" id="About">
                <article>
                    <Title
                        title="Le HSR : De quoi s'agit-il ?"
                    />
                    <aside className="w-full grid grid-cols-3 gap-7 my-10">
                        <div className="text-center">
                            <img src={journalCode} className="w-fit mx-auto my-4"></img>
                            <TitleSecond
                                title="Nos débuts"
                            />
                            <Paragraph
                                content="Lancé pour la 1ère fois en 2017 avec environ 50 étudiants de l'Université de Reims, le HSR est un des tout premiers CTF dédié aux étudiants. Pour sa 2ème édition, Le HSR a été ouvert à tous les étudiants d'établissements français.
                            "
                            />
                        </div>
                        <div className="text-center">
                            <img src={journalCode} className="w-fit mx-auto my-4"></img>
                            <TitleSecond
                                title="L'extension"
                            />
                            <Paragraph
                                content="Avec une limite de 100 participants, nous avions atteint nos objectifs avec plus de 10 établissements représentés.Les étudiants sont venus de toute la France : de Rennes à Strasbourg, en passant par Valenciennes, Paris et Limoges. 
                            "
                            />
                        </div>
                        <div className="text-center">
                            <img src={journalCode} className="w-fit mx-auto my-4"></img>
                            <TitleSecond
                                title="Aujourd'hui"
                            />
                            <Paragraph
                                content="
                                Cette édition a renforcé notre envie de faire de ce HackSecuReims un événement majeur de la région Grand Est dans le domaine de la cybersécurité.
                                Jusqu'à la 6 édition en 2023, ce sont environ 200 étudiants participants aux conférences et entre 120 et 150 étudiants participants au CTF."
                            />
                        </div>
                    </aside>
                </article>
                <Title
                    title="La 7ème édition : une évolution"
                />
                <aside className="w-full grid grid-cols-3 gap-7 my-10">
                    <div className="text-center">
                        <img src={calendar} className="w-fit mx-auto my-4"></img>
                        <TitleSecond
                            title="Quand ?"
                        />
                        <Paragraph
                            content="Cette nouvelle édition aura lieu les 29 et 30 mars 2024."
                        />
                    </div>
                    <div className="text-center">
                        <img src={geo} className="w-fit mx-auto my-4"></img>
                        <TitleSecond
                            title="Où ?"
                        />
                        <Paragraph
                            content="Elle se tiendra cette année au Parc des Expositions de Reims."
                        />
                    </div>
                    <div className="text-center">
                        <img src={question} className="w-fit mx-auto my-4"></img>
                        <TitleSecond
                            title="Par qui ?"
                        />
                        <Paragraph
                            content="
                            Organisée par HackSecu'R et le Master Réseaux Télécoms de l'Université de Reims Champagne-Ardenne."
                        />
                    </div>
                    <div className="text-center">
                        <img src={chat} className="w-fit mx-auto my-4"></img>
                        <TitleSecond
                            title="Nouvelle association"
                        />
                        <Paragraph
                            content="Cette 7ème édition est un grand pas dans l'histoire du HSR. Elle est marquée par la création de l'association dédiée à l'événement : HackSecu'R."
                        />
                    </div>
                    <div className="text-center">
                        <img src={house} className="w-fit mx-auto my-4"></img>
                        <TitleSecond
                            title="Nouveau cadre"
                        />
                        <Paragraph
                            content="L'événement évolue, en passant de la salle d'examens de l'université au Parc des Expositions de Reims."
                        />
                    </div>
                    <div className="text-center">
                        <img src={person} className="w-fit mx-auto my-4"></img>
                        <TitleSecond
                            title="Nombre de participants"
                        />
                        <Paragraph
                            content="
                            Cela nous permettra d'accueillir 300 étudiants participants pour le CTF et bien plus d'étudiants, de professionnels mais surtout de passionnés durant les conférences et le forum !
                             "
                        />
                    </div>
                </aside>
                <Title
                    title="Qu'attendre de cette édition ?"
                />
                <aside className="w-full grid grid-cols-3 gap-7 my-10">
                    <div className="text-center">
                        <img src={friday} className="w-fit mx-auto my-4"></img>
                        <TitleSecond
                            title="Vendredi"
                        />
                        <Paragraph
                            content="La journée du Vendredi est dédiée aux conférences et au forum entreprise
                            "
                        />
                    </div>
                    <div className="text-center">
                        <img src={megaphone} className="w-fit mx-auto my-4"></img>
                        <TitleSecond
                            title="Conférences"
                        />
                        <Paragraph
                            content="Les conférences techniques dureront environ 30 à 45 minutes sur le thème de la cybersécurité
                            "
                        />
                    </div>
                    <div className="text-center">
                        <img src={house} className="w-fit mx-auto my-4"></img>
                        <TitleSecond
                            title="Stands"
                        />
                        <Paragraph
                            content="Les stands permettront aux étudiants d'échanger avec les sponsors, qui pourront prévoir des workshops ou toute autre activité sur leur stand
                            "
                        />
                    </div>
                    <div className="text-center">
                        <img src={rumps} className="w-fit mx-auto my-4"></img>
                        <TitleSecond
                            title="Rumps"
                        />
                        <Paragraph
                            content="Les rumps d'environ 10 minutes porteront sur l'informatique, l'administration système et réseau et la cybersécurité
                            "
                        />
                    </div>
                    <div className="text-center">
                        <img src={flag} className="w-fit mx-auto my-4"></img>
                        <TitleSecond
                            title="Capture The Flag"
                        />
                        <Paragraph
                            content="Le CTF 💀 débutera le Vendredi à 21h et se finira le Samedi 10h.
                            "
                        />
                    </div>
                </aside>
            </section>
        </>
    )
}

export default About;