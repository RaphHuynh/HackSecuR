import NiveauSponsor from "../kit_ux_ui/NiveauSponsor";
import Paragraph from "../kit_ux_ui/Paragraph";
import Title from "../kit_ux_ui/Title";
import TitleSecond from "../kit_ux_ui/TitleSecond";

function Sponsors(){
    const niveauSponsors=[{"title":"Mécène","content":"Réservé aux institutions finançant généreusement l’événement"},{"title":"Platinum (nombre limité) - 4 000 €","content":"Grand stand carré (minimum 16m²) avec emplacement privilégié. Mise en avant en tant qu’un des sponsors principaux de l’événement avec une visibilité maximale sur tous les supports possibles de communication et de promotion, comme le site, les réseaux sociaux,les badges et autres supports publicitaires. Un ou plusieurs emplacements pour des bannières publicitaires. Mise en avant lors du discours d’ouverture"},{"title":"Gold - 2 000 €","content":"Moyen stand (minimum 10m²). Présentation d’un rump sur sujet libre (~10 min). Accès à la liste complète des participants au CTF"},{"title":"Silver - 1 000 €","content":"Petit stand (minimum 6m²)"},{"title":"Bronze - 500 €","content":"Communication sur les réseaux sociaux, le site et autres supports"},{"title":"Partenaire communautaire","content":"Réservé aux organismes aidant à l’organisation de l’événement. Reconnaissance sur les supports de communication"}];

    return (
        <>
            <section className="w-full min-h-screen flex flex-col px-24 pb-20 gap-4" id="Sponsors">
                <Title
                    title="Niveaux de sponsoring et avantages"
                />
                <article className="flex flex-col">
                    {niveauSponsors.map((sponsor)=>(
                        <NiveauSponsor
                            title={sponsor.title}
                            content={sponsor.content}
                        />
                    ))}
                </article>
                <Title
                    title="Comment devenir Sponsor ?"
                />
                <article className="flex flex-col">
                    <p className="text-white/90 my-2 text-lg">
                    Pour devenir sponsor de l'événement HS'R veuillez nous contacter à l'adresse <a href="mailto:hacksecureims@gmail.com?subject=SponsoringHSR2024-NomEntreprise" className="text-red-600 hover:underline">hacksecureims@gmail.com</a> avec pour objet :<span className="text-red-600">“Sponsoring HSR2024 - NomEntreprise”</span>
                    </p>
                    <Paragraph
                        content="Pour accélérer le processus, nous vous demandons de nous envoyer, au
                        maximum du possible, les informations et documents suivants :"
                    />
                    <ul className="list-disc list-inside text-white/90 text-lg">
                        <li>
                            Un logo sur fond clair (format png)
                        </li>
                        <li>
                            Un logo sur fond sombre (format png)
                        </li>
                        <li>
                            Les informations relatives à votre entreprise afin de remplir le devis et la facture
                        </li>
                        <li>
                            Une présentation de votre entreprise qui sera publiée sur les supports de communication (selon le niveau de sponsoring choisi)
                        </li>
                        <li>
                            Si vous souhaitez faire un rump et si oui, sur quel sujet (selon le niveau )
                        </li>
                        <li>
                            Si vous avez des besoins spécifiques en prises, tables (pour des démonstrations par exemple), ou autre
                        </li>
                        <li>
                            Les différents contacts chez vous et leur fonction (ex: créateur de challenge,relation sponsors, etc)
                        </li>
                        <li>
                            Toute autre information que vous jugerez utile
                        </li>
                    </ul>
                </article>
            </section>
        </>
    )
}

export default Sponsors;