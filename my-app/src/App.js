import './App.css';
import useState from 'react';
import { Navigate, Route, Routes } from "react-router";
import ImageQs from './ImageQs';
import Home from './Home';
import QR from './QR';
import Bluetooth from './Bluetooth';
import CustomQs from './CustomQs';
import FaceScan from './FaceScan';

function App() {

  // const [question1, setQuestion1] = useState(null);
  // const onSubmit = (data) => console.log(data);
  // const handleSubmit = (data) => {
  //   setQuestion1(data);
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path = "imageqs" element = {<ImageQs />}/>
        <Route path = "qr" element = {<QR/>}/>
        <Route path = "bluetooth" element = {<Bluetooth/>}/>
        <Route path = "customqs" element = {<CustomQs/>}/>
        <Route path = "facescan" element = {<FaceScan/>}/>
      </Routes>

    </div>
  );
}

export default App;
