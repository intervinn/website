import Pfp from "/pfp.png"

const Heading = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-5xl font-mono text-center">Intervinn</h1>
            <img className="object-cover w-80 h-80 rounded-3xl shadow-lg" src={Pfp}/>
            <h2 className="text-slate-300 text-2xl font-mono text-center mb-12 mt-5">I make stuff, usually the web applications</h2>
        </div>
    )
}

export default Heading