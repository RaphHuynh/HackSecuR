function Personne(props){
    return(
        <>
        <aside className="text-center">
            <h1 className="text-white/80 text-4xl">
                {props.prenom} <span className="uppercase">{props.nom}</span>
            </h1>
            <p className="text-red-600 text-2xl">
                {props.poste}
            </p>
        </aside>
        </>
    )
}

export default Personne;