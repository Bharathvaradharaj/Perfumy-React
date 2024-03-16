

import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"


function Navbar() {


    return (
  
      <nav>
        <h1>Perfumy</h1>
  
        <ul>
          <li>Home | </li>
          <li>Products | </li>
          <li>About | </li>
          <li>Contact | </li>
        </ul>
      </nav>
    )
  }


  function Searchbar() {

    return (
  
      // <!--Search Bar-->
      //<!--Step 11 Create a div tag and give a classname as searchbar-->
      <div class="searchbar">
        {/* <!--Step 12 Inside div create a input field with placeholder
              Search
              --> */}
        <input type="text" placeholder="Search"></input>
        {/* <!--Step 13 Go back to style.css and style searchbar-->  */}
      </div>
    )
  }
  
function Products() {

    return (
      <div class="products">
  
        <div class="box">
  
          <img src={one}></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
  
  
        <div class="box">
          <img src={two} alt="villain"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box">
          <img src={three} alt="Designs Club"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
      </div>
    )
  }
  
  function About() {
    return (
      <div style={{ textAlign: "center" }}>
        <div class="about" style={{ marginTop: "10px", textAlign: "center" }}>
          <h1>About Us</h1>
          <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
      </div>
    )
  }
  
  
  function Footer() {
  
    return (
  
      <footer>
  
        <div class="contact">
  
  
  
  
          <h3>Contact</h3>
          <p style={{marginTop: "5px"}}>+91 3478631928 <br></br>
            perfumy@gmail.com
          </p>
  
        </div>
  
        <p style={{fontSize: "small", padding: "20px",color: "grey"}}>
          W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
  
          Copyright 1999-2023 by Refsnes Data. All Rights Reserved.
          W3Schools is Powered by W3.CSS.
        </p>
      </footer>
    )
  }
  
  export {Navbar,Searchbar,Products,About,Footer}