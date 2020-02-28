import React from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './App.css';
import Reviews from './Reviews';

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
      <Reviews/>
       
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
  const {isDiscount, discount} = props
  if(isDiscount){
    return(
      <p>Lagi Diskon {discount}% Off</p>
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
  const benefits = ['tidak kusut', 'limited edition', 'bahan lembut', 'sole aman']
  const listBenefits = benefits.map((itemBenefits) =>
    <li>{itemBenefits}</li>
  )
  // const title = "Sepatu Swag"
  // const price = "1.500.000"
  const info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ducimus. Labore minima dolor laudantium doloremque provident perferendis est, nam optio deserunt repellendus distinctio vitae error nemo, similique, numquam a quod?"

  return(
    <div className="deskripsi">
        <p className="cate">{category}</p>
        <h1 className="title">{title}</h1>
        <p className="price">Rp. {price}</p>
        <CheckDiscount 
          isDiscount={isDiscount} 
          discount={20}/>
        <p className="info"> {info} </p>
        <ul>
          {listBenefits}
        </ul>
        <a  onClick={(e) => TambahCart(title, e)} href="#">Add to cart</a>
      </div>
  )
}

function TambahCart(e){
  console.log('Membeli Produk ' + e)
}

CheckDiscount.PropTypes = {
  discount : PropTypes.number
}

export default App;
