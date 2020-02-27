import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="parentbox">
      <FotoProduk/>
      <ProdukInfo 
        category="SNEAKER" 
        title="NIKE AIRZOOM"
        price="1.500.000"
        isDiscount = "yes"
        />
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
function CheckDiscount(props){
  const {isDiscount} = props
  if(isDiscount){
    return(
      <p>Lagi Diskon 50% Off</p>
    )
  }else{
    return(
      <p>Belom Ada Diskon</p>
    )
  }
}

function ProdukInfo(props){
  // const cat = "SNEAKER"
  const {category, title, price, isDiscount} = props
  // const title = "Sepatu Swag"
  // const price = "1.500.000"
  const info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ducimus. Labore minima dolor laudantium doloremque provident perferendis est, nam optio deserunt repellendus distinctio vitae error nemo, similique, numquam a quod?"

  return(
    <div className="deskripsi">
        <p className="cate">{category}</p>
        <h1 className="title">{title}</h1>
        <p className="price">Rp. {price}</p>
        <CheckDiscount isDiscount={isDiscount}/>
        <p className="info"> {info} </p>

        <a  onClick={(e) => TambahCart(title, e)} href="#">Add to cart</a>
      </div>
  )
}

function TambahCart(e){
  console.log('Membeli Produk ' + e)
}
export default App;
