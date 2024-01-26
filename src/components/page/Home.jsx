import TitleHome from "../kit_ux_ui/TitleHome";
import logo_2024 from "../../assets/img/logo_hsr2024.svg"
import CountdownTimer from "../kit_ux_ui/CountdownTimer";

function Home(){
    return(
        <section className="w-full h-screen flex flex-col justify-center items-center px-24 gap-4" id="Home">
            <article className="w-full flex justify-center items-center">
                <aside className="flex flex-col w-full items-center">
                    <TitleHome
                        title2="Du 29 au 30 mars"
                        content="L'édition aura lieu au Parc des expositions de Reims."
                    />
                </aside>
                <img src={logo_2024} className="w-1/3 "></img>
            </article>
            <CountdownTimer/>
        </section>
    )
}

export default Home;