import React,{useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Add from "./components/Add/Add";
import AddNew from "./components/Add/AddNew";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import CardDetails from "./components/Cards/CardDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    //--------YÖNLENDİRME İŞLEMLERİ--------
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addnew" element={<AddNew />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
  //-----------------------------------------
}
const Home=()=> {
  let [fetchedData, updateFetchedData] = useState([]);
  let api="https://5fc9346b2af77700165ae514.mockapi.io/simpsons";
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="ubuntu my-5">Characters</h1>
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Add/>
        </div>
        <div className="col-8">
          <div className="row">
            <Cards  page="/"  fetchedData={fetchedData}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
