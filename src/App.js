import {Navbar} from './components/Navbar';
import { Searchbar } from './components/Navbar';
import { Products } from './components/Navbar';
import { About } from './components/Navbar';
import { Footer } from './components/Navbar';




function App(){

    return(
        <div>
    <Navbar></Navbar>
    <Searchbar></Searchbar>
    <Products></Products>
    <About></About>
    <Footer></Footer>
  </div>
    )
}

export default App