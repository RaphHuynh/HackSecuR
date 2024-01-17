import Typewriter from "./Typewriter";

function TitleHome(props){
    return(
            <article className="flex flex-col w-full">
                <h1 className="text-9xl text-red-800 uppercase glow title-blink">
                    <span className="text-white/80 glow-blink">&gt; </span>H<span className="text-white/80 glow-blink">ack</span>S<span className="text-white/80 glow-blink">ecu'</span>R #7
                </h1>
                <h1 className="text-8xl text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-700">
                <Typewriter text={props.title2} delay={100}/><span className="text-white/80 blinking-cursor">|</span>
                </h1>
                <p className="text-3xl text-white/80 my-2">
                    {props.content}
                </p>
            </article>
    )
}

export default TitleHome;
