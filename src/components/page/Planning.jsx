import Creneau from "../kit_ux_ui/Creneau";
import Title from "../kit_ux_ui/Title";
import TitleSecond from "../kit_ux_ui/TitleSecond";

function Planning() {
    const creneauxVendredi = [{ "heure": "08:00", "content": "Accueil et installation des sponsors" }, { "heure": "08:45", "content": "Accueil du public" }, { "heure": "09:00", "content": "Buffet petit-déjeuner" }, { "heure": "09:15", "content": "Discours d'ouverture" }, { "heure": "09:30", "content": "Ouverture des stands et des rumps" }, { "heure": "10:00", "content": "Début des conférences techniques" }, { "heure": "12:00", "content": "Pause déjeuner conférences techniques" }, { "heure": "14:00", "content": "Reprise des conférences techniques" }, { "heure": "19:00", "content": "Fin des conférences techniques" }, { "heure": "19:30", "content": "Début du service restauration (€)" }, { "heure": "21:00", "content": "Début du CTF" }]
    const creneauxSamedi = [{ "heure": "08:00", "content": "Buffet petit-déjeuner" }, { "heure": "10:00", "content": "Fin du CTF" }, { "heure": "10:30", "content": "Remise des prix et discours de clôture" }]

    return (
        <section className="w-full min-h-screen flex flex-col px-24 gap-10 justify-center items-center" id="Planning">
            <Title
                title="Planning prévisionnel"
            />
            <article className="flex gap-10">
                <div className="flex flex-col gap-4 bg-white/5 px-5 py-5 rounded-md">
                    <TitleSecond
                        title="Vendredi 29 Mars"
                    />
                    <div className="flex flex-col gap-4">
                        {creneauxVendredi.map((creneau) => (
                            <Creneau
                                heure={creneau.heure}
                                content={creneau.content}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 bg-white/5 px-5 py-5 rounded-md">
                    <TitleSecond
                        title="Samedi 30 Mars"
                    />
                    <div className="flex flex-col gap-4">
                        {creneauxSamedi.map((creneau) => (
                            <Creneau
                                heure={creneau.heure}
                                content={creneau.content}
                            />
                        ))}
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Planning;