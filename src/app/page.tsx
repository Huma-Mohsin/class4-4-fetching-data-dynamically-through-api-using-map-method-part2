
import Heading from "../../components/heading";
import HomePageDetails from "../../components/homepagedetails";

export default function Home() {
  return (
    <div > 
      <Heading style={{color:"goldenrod",fontSize:"35px",fontWeight:"bold",textAlign:"center",padding:"20px",margin:"30px"}} text="Fetching Data Dynamically Through API By Using Map Method..."/>
      <HomePageDetails/>
    </div>
  );
}
