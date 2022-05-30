import { useState,useEffect } from "react";
import axios from 'axios'
import './App.css';






function App() {

  const [veri,setVeri] = useState();

  const [tarih,setTarih] = useState();

  useEffect(()=>{

    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then((res)=>{setVeri(res.data[tarih])})
    .catch((err)=>{console.log(err)})

  },[veri,tarih])




  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-center text-Dark display-3">TÜRKİYE COVİD 19 ARAMA MOTORU</h2> 
            <input placeholder="GG/AA/YYYY OLARAK GİRİNİZ" className="form-control" onChange={(e)=>{setTarih(e.target.value)}} />

            <table className="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">test sayısı</th>
                  <th scope="col">hasta sayısı</th>
                  <th scope="col">vefat sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-white">
                  <th scope="row">1</th>
                  <td className={veri===undefined ? "bg-danger" : "bg-Info"}>{veri === undefined ? "veri bekleniyor" : veri.totalTests}</td>
                  <td className={veri===undefined ? "bg-danger" : "bg-Info"}>{veri === undefined ? "veri bekleniyor" : veri.patients}</td>
                  <td className={veri===undefined ? "bg-danger" : "bg-Info"}>{veri === undefined ? "veri bekleniyor" : veri.deaths}</td>
                </tr>
                
              </tbody>
            </table>

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
