import Heading from "../../../components/heading"

const UserList=async()=>{
    const url="https://jsonplaceholder.typicode.com/users";
    const fetchData=await fetch(url);
    const response =await fetchData.json();
    console.log(response);


    return(
        <div><Heading style={{color:"magenta",fontSize:"35px",fontWeight:"bold",textAlign:"center",padding:"20px",margin:"30px"}} text="Fetching Data Dynamically Through API By Using Map Method..."/>
        <ol>

            {/* this code is going to become a dynamic */}
           {response.map((val:{name:string},i:number)=>{

return  <li style={{color:"darkorange",fontSize:"25px",fontWeight:"bold",textAlign:"center",justifyContent:"center"}} key ={i}> {`${i+1} ${val.name}` }</li>


            })}
        </ol>
        </div>

    )
}
export default UserList