import React, { useSyncExternalStore } from 'react'
import './Card.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function Card(props) {
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
  const[video,setVideo]=useState('');
  const[isHovered,setIsHovered]=useState(false);
  const youtubeUrl='https://www.youtube.com/embed/' 

  const handleMouseEnter=()=>{
      setIsHovered(true);
  };
  const handleMouseLeave=()=>{
      setIsHovered(false);
  };

  const fetchURL= async()=>{
    try{
    const response= await axios.get('/movie/${props.id}',{
      params:{
        append_to_response:'videos',
      },
    });
    if(response.data.videos.results[0].key){
      setVideo(response.data.videos.results[0].key)
    }
  }
  catch(e){
    console.log(e);
  }}
  return (
    
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      {!isHovered ?(<img className='card_poster' src={imageUrl} alt='poster'/>) :
       ( <iframe allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;' allowfullscreen  title="Yoututbe video player" width='100%' height='100%' src={'${youtubeUrl}${video}'}></iframe>)}
      
   </div>
  )
}
