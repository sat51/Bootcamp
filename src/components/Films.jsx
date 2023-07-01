import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function Films() {
    const[news,setnews] = useState([]);
   useEffect(()=>{
      axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=f138afdd61544136b0646bd4120ece09").then((res)=>{
        console.log(res.data.articles);
        setnews(res.data.articles);
      })
   },[])
  return (
    <>
      <div className='container my-5 bg-dark'>
        <div className='row text-center'>
          {
            news.map((val)=>{
              return(
                <div className='col my-3'>
                <div className="card" style={{width: "18rem"}}>
        <img src={val.urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{val.title}</h5>
          <p className="card-text">{val.description}</p>
          <button className="btn btn-warning" ><a className="text-white style-none" href={val.url}>know more</a></button>
        </div>
      </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default Films
