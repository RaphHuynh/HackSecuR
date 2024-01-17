function Paragraph(props){
    return(
        <>
            <p className="text-white/90 my-2 text-lg">
                {props.content}
            </p>
        </>
    )
}

export default Paragraph;
