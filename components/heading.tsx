interface PropsStructure{
    text:string;
    
}
export default function Heading(props:any){
    return(
        <div>
            <h1 style={props.style}>{props.text}</h1>
        </div>
    )
}