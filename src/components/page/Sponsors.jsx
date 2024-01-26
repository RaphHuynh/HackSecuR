import NiveauSponsor from "../kit_ux_ui/NiveauSponsor";
import Title from "../kit_ux_ui/Title";

function Sponsors() {
    const niveauSponsors = [{ "title": "Mécène", "content": "Réservé aux institutions finançant généreusement l’événement" }, { "title": "Gold - 2 000 €", "content": "Grand stand carré (minimum 16m²) avec emplacement privilégié. Mise en avant en tant qu’un des sponsors principaux de l’événement avec une visibilité maximale sur tous les supports possibles de communication et de promotion, comme le site, les réseaux sociaux,les badges et autres supports publicitaires. Un ou plusieurs emplacements pour des bannières publicitaires. Mise en avant lors du discours d’ouverture" }, { "title": "Silver - 1 000 €", "content": "Moyen stand (minimum 10m²). Présentation d’un rump sur sujet libre (~10 min). Accès à la liste complète des participants au CTF" }, { "title": "Bronze - 500 €", "content": "Petit stand (minimum 6m²). Communication sur les réseaux sociaux, le site et autres supports" }, { "title": "Partenaire communautaire", "content": "Réservé aux organismes aidant à l’organisation de l’événement. Reconnaissance sur les supports de communication" }];

    return (
        <section className="w-full min-h-screen flex flex-col px-24 gap-4 justify-center" id="Sponsors">
            <Title
                title="Niveaux de sponsoring et avantages"
            />
            <article className="grid grid-cols-3 gap-4">
                {niveauSponsors.map((sponsor) => (
                    <NiveauSponsor
                        title={sponsor.title}
                        content={sponsor.content}
                    />
                ))}
            </article>
        </section>
    )
}

export default Sponsors;