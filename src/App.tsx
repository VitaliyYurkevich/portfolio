import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Contact} from "./layout/sections/contact/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";
import {GoTopBtn} from "./components/goTopBtn/goTopBtn";


function App() {
    return (
        <div className="App">
            <Particle />
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Slogan/>
            <Footer/>
            <GoTopBtn />
        </div>
    );
}

export default App;

