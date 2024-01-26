import pdf from "../../assets/sponsors.pdf";

function NiveauSponsor(props){
    return(
        <>
            {props.title === "Mécène"&&
                <aside className="flex flex-col w-full items-center bg-emerald-600/5 p-5 rounded-md text-center border-2 border-emerald-600">
                    <h1 className="text-red-600 text-4xl py-2">$ {props.title}</h1>
                    <p className="text-white/80 text-lg flex h-full items-center">{props.content}</p>
                    <a href={pdf} download="hsr_sponsors.png" className="bg-emerald-600 hover:bg-red-700 delay-75 p-2 rounded-md mt-2">
                        <h1 className="text-white/80 text-2xl">Devenir sponsors</h1>
                    </a>
                </aside>
            }
            {props.title === "Gold - 2 000 €"&&
                <aside className="flex flex-col w-full items-center bg-amber-400/5 p-5 rounded-md text-center border-2 border-amber-400">
                    <h1 className="text-red-600 text-4xl py-2">$ {props.title}</h1>
                    <p className="text-white/80 text-lg flex h-full items-center">{props.content}</p>
                    <a href={pdf} download="hsr_sponsors.png" className="bg-amber-400 hover:bg-red-700 delay-75 p-2 rounded-md mt-2">
                        <h1 className="text-white/80 text-2xl">Devenir sponsors</h1>
                    </a>
                </aside>
            }
            {props.title === "Silver - 1 000 €"&&
                <aside className="flex flex-col w-full items-center bg-slate-500/5 p-5 rounded-md text-center border-2 border-slate-500">
                    <h1 className="text-red-600 text-4xl py-2">$ {props.title}</h1>
                    <p className="text-white/80 text-lg flex h-full items-center">{props.content}</p>
                    <a href={pdf} download="hsr_sponsors.png" className="bg-slate-500 hover:bg-red-700 delay-75 p-2 rounded-md mt-2">
                        <h1 className="text-white/80 text-2xl">Devenir sponsors</h1>
                    </a>
                </aside>
            }
            {props.title === "Bronze - 500 €"&&
                <aside className="flex flex-col w-full items-center bg-amber-900/5 p-5 rounded-md text-center border-2 border-amber-900">
                    <h1 className="text-red-600 text-4xl py-2">$ {props.title}</h1>
                    <p className="text-white/80 text-lg flex h-full items-center">{props.content}</p>
                    <a href={pdf} download="hsr_sponsors.png" className="bg-amber-900 hover:bg-red-700 delay-75 p-2 rounded-md mt-2">
                        <h1 className="text-white/80 text-2xl">Devenir sponsors</h1>
                    </a>
                </aside>
            }
            {props.title === "Partenaire communautaire"&&
                <aside className="flex flex-col w-full items-center bg-white/5 p-5 rounded-md text-center border-2">
                    <h1 className="text-red-600 text-4xl py-2">$ {props.title}</h1>
                    <p className="text-white/80 text-lg flex h-full items-center">{props.content}</p>
                    <a href={pdf} download="hsr_sponsors.png" className="bg-red-600 hover:bg-red-700 delay-75 p-2 rounded-md mt-2">
                        <h1 className="text-white/80 text-2xl">Devenir sponsors</h1>
                    </a>
                </aside>
            }
        </>
    )
}

export default NiveauSponsor;