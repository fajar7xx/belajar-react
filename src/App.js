import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="parentbox">
      <FotoProduk/>
      <ProdukInfo/>
    </div>
  );
}
function FotoProduk(){
  return(
    <div className="foto">
        <img src="img/sepatu.jpg" alt=""/>
      </div>
  )
}

function ProdukInfo(){
  const cat = "SNEAKER"
  const title = "Sepatu Swag"
  const price = "1.500.000"
  const info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ducimus. Labore minima dolor laudantium doloremque provident perferendis est, nam optio deserunt repellendus distinctio vitae error nemo, similique, numquam a quod?"

  return(
    <div className="deskripsi">
        <p className="cate">{cat}</p>
        <h1 className="title">{title}</h1>
        <p className="price">Rp. {price}</p>
        <p className="info"> {info} </p>
      </div>
  )
}
export default App;
