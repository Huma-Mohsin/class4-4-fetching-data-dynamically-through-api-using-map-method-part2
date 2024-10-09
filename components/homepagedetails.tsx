function HomePageDetails() {
    return (
        <div>
            <h1 style={{ color: "green", fontSize: "22px", textAlign: "center" }}>
                Fetching data dynamically through an API and using the map method in JavaScript offers several advantages, especially when dealing with arrays of data. 
                
                <br /> Here are the key benefits:
             
            </h1>
            <br/>
          
            <ol>
           
                <li style={{color:"blue",fontSize: "20px", textAlign: "justify",listStyle:"inside"}}>Efficient Data Display: Easily loops through API data to display items like lists, tables, etc.</li>
                <br/>
                <li style={{color:"blue",fontSize: "20px", textAlign: "justify",listStyle:"inside"}}>Keeps Data Safe: It doesn’t change the original data, creating a new copy instead.</li>
                <br/>
                <li style={{color:"blue",fontSize: "20px", textAlign: "justify",listStyle:"inside"}}>Handles Async Data: Works smoothly after fetching data from an API, especially with large datasets.</li>
                <br/>
                <li style={{color:"blue",fontSize: "20px", textAlign: "justify",listStyle:"inside"}}>Cleaner Code: Makes the code easy to read and maintain compared to manual loops.</li>
                <br/>
                <li style={{color:"blue",fontSize: "20px", textAlign: "justify",listStyle:"inside"}}>Easier Data Manipulation: Allows you to easily format, filter, or transform API data.</li>
                <br/>
                <li style={{color:"blue",fontSize: "20px", textAlign: "justify" ,listStyle:"inside"}}>Modern Features: Works great with new JavaScript features and frameworks like React.</li>
                <br/>
                <li style={{color:"blue",fontSize: "20px", textAlign: "justify",listStyle:"inside"}}>Custom Data Mapping: Lets you easily create custom views or formats based on the fetched data.</li>
            </ol>
        </div>
    );
}

export default HomePageDetails;
