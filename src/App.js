import './App.css';
import "./atlan_project_css.css"
import HeaderComp from "./components/HeaderComp"
import BodyComp from "./components/BodyComp"
import FooterComp from "./components/FooterComp"

function App() {
  return (
    <div className='body-jsx'>
       <HeaderComp />
       <BodyComp />
       <FooterComp/>
       
    </div>
  );
}

export default App;
