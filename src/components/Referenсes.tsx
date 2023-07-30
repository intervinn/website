import GitHub from "/gh.png"

interface ReferenceProps {
    image: string,
    label: string,
    href: string,
}

const ReferenceItem : React.FC<ReferenceProps> = ({image, label, href}) => {
    return (
        <div className="h-fit w-fit flex flex-row items-center justify-center">
            <img className="w-20 h-20" src={image}/>
            <a className="text-white font-mono text-xl" href={href}>{label}</a>
        </div>
    )
}

const References = () => {
    return (
        <div className="flex-col sm:flex-row">
            <ReferenceItem image={GitHub} label="Github" href="https://github.com/intervinn" />
        </div>
    )
}

export default References