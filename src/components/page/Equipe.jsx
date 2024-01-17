import Personne from "../kit_ux_ui/Personne";
import Title from "../kit_ux_ui/Title";
import iconPersonne from "../../assets/img/person.svg"

function Equipe(){
    const personnes = [{"prenom":"Florent","nom":"Nolot","poste":"Président - Responsable logistique"},{"prenom":"Thomas","nom":"Gigout","poste":"Vice président - Responsable sponsors"},{"prenom":"Romain","nom":"Ortega","poste":"Vice président - Responsable liaison écoles"},{"prenom":"Louis","nom":"Baes","poste":"Vice président - Responsable conférences"},{"prenom":"Lucie","nom":"Contal","poste":"Trésorière"},{"prenom":"Louis","nom":"POIDEVIN","poste":"Secrétaire"},{"prenom":"Jean-Eudes","nom":"LHERBIER","poste":"Responsable communication"},{"prenom":"Emmanuel","nom":"Mesnard","poste":"Responsable challenges"},{"prenom":"Cyril","nom":"Rabat","poste":"Co-responsable logistique"}]

    return (
        <>
            <section className="w-full min-h-screen flex flex-col px-24 gap-10 justify-center items-center" id="Team">
                <Title
                    title="Equipe HackSecu'R"
                />
                <article className="w-full grid grid-cols-4 gap-7">
                    {personnes.map((personne)=>(
                        <div className="">
                            <div className="w-full flex flex-col tems-center justify-center">
                                <img src={iconPersonne} className="w-fit mx-auto my-4"></img>
                                <Personne
                                    prenom={personne.prenom}
                                    nom={personne.nom}
                                    poste={personne.poste}
                                />
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </>
    )
}

export default Equipe;