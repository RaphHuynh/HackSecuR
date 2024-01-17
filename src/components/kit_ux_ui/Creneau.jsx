function Creneau(props){
    return (
        <>
        <aside className="flex gap-4">
            <h1 className="text-2xl text-red-600 border-red-600 border-2 px-2 rounded-md">
                {props.heure}
            </h1>
            <div className="text-2xl text-white/80">
                {props.content}
            </div>
        </aside>
        </>
    )
}

export default Creneau;