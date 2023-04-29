import React from 'react'
import { Link } from "react-router-dom"

export default function() {
  return (
<nav class="navbar navbar-expand-lg navbar-light" style={{marginBottom:'50px'}}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-left" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item mx-0" style={{paddingLeft:'10%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#000'}} href="/main">Home</a>
      </li>
      <li class="nav-item mx-0" style={{paddingLeft:'30%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#000'}} href="/news">News</a>
      </li>
      <li class="nav-item mx-0" style={{paddingLeft:'30%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#000'}} href="/volunteering">Volunteers</a>
      </li>
      <li class="nav-item mx-0" style={{paddingLeft:'30%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#000'}} href="/organizations">Organizations</a>
      </li>
      <li class="nav-item mx-0" style={{paddingLeft:'30%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#000'}} href="/about">AboutUs</a>
      </li>
      <li class="nav-item mx-0" style={{paddingLeft:'30%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#000'}} href="/contacts">Contacts</a>
      </li>
    </ul>
  </div>
</nav>
  )
}
