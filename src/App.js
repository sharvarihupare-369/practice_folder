import logo from './logo.svg';
import './App.css';
import VerticalChart from './components/VerticalChart';
import Horizontal from './components/Horizontal';
import AreaChart from './components/AreaChart';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';
import Stacked from './components/Stacked';

function App() {
  return (
    <div className="App">
     {/* <VerticalChart/> */}
     {/* <Horizontal/> */}
     {/* <AreaChart/> */}
     {/* <PieChart/> */}
     {/* <RadarChart/> */}
     <Stacked/>
    </div>
  );
}

export default App;
