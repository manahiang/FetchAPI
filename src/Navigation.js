import{Link,} from "react-router-dom";
function Nevigation ()
{
   return(
    <>
    <nav>
        <ul>
           <li><Link to="/" style={{color:'red',fontFamily:"monospace"}}>Hello Home</Link></li>
           <li><Link to="/contact" style={{textDecoration:'none'}}>Hello Contact</Link></li>
           <li><Link to="/about" style={{fontFamily:'revert-layer'}}>Hello About</Link></li>
           <li><Link to="/service" >Hello Service</Link></li>
        </ul>
            <p style={{color:'red'}}><hr/ ></p>
             <h3>Show the content below</h3>
            <p style={{color:'red'}}><hr/ ></p>
    </nav>
    </>
   )

   
}
export default Nevigation;