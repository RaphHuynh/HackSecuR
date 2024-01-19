import logo from "../../assets/img/g12.svg"

function NavBar(){
    const link = [
        {text:"Accueil", id:"#Home"},
        {text:"Sponsors", id:"#Sponsors"}
    ]

    return(
        <nav className="fixed w-full flex items-center px-10 md:px-24 py-2 z-10">
            <a href="" className="">
                <img src={logo} className="h-14"></img>
            </a>
            <div className="flex sm:mr-0 sm:ml-auto items-center justify-center w-full sm:w-fit">
                {link.map((item) => (
                    <a key={item.id} className="transition delay-150 box-border px-5 py-2 ml-2 bg-[#1E1E1E] border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-current rounded-full text-center text-xs sm:text-sm lg:text-lg" href={item.id}>{item.text}</a>
                ))}
            </div>
        </nav>
    )
}

export default NavBar;