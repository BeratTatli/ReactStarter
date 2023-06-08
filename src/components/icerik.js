import React, { useContext } from 'react'
import { TemaVerisi } from '../App'

export default function Icerik() {
  return (
    <div style={useContext(TemaVerisi)}>
      <h1>React Alıstırma</h1>
      <h2>Use Context ile componentler arası veri tasima </h2>
      <p>Lorem ipsum dolor sit amed.</p>
      <p>Lorem ipsum dolor sit amed.</p>
      <p>Lorem ipsum dolor sit amed.</p>
      <p>Lorem ipsum dolor sit amed.</p>
      <p>Lorem ipsum dolor sit amed.</p>
      <p>Lorem ipsum dolor sit amed.</p>
    </div>
  )
}

//Context ile veri aktararak koyu/beyaz mod yapımı
