function NiveauSponsor(props){
    return(
        <>
        <aside className="flex w-full items-center bg-white/5 p-5 my-4 rounded-md">
            <h1 className="text-red-600 text-4xl w-1/3">$ {props.title}</h1>
            <p className="text-white/80 text-lg w-2/3">{props.content}</p>
        </aside>
        </>
    )
}

export default NiveauSponsor;