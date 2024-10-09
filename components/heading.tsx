interface PropsStructure{
    text:string;
    style?:React.CSSProperties;

}
export default function Heading(props:PropsStructure){
    return(
        <div>
            <h1 style={props.style}>{props.text}</h1>
        </div>
    )
}