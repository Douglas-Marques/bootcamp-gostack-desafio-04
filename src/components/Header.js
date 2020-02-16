import React, { Component } from 'react'
import './Header.css'

import fotoPerfil from '../assets/perfil.png'

class Header extends Component {
  render() {
    return (
      <div className="retangulo">
        <div className="face"></div>
        <div className="perfil">
          <span className="perfil-text">Meu perfil</span>
          <img src={'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'} alt="Foto de perfil" className="perfil-icon" />
        </div>
      </div>
    )
  }
}

export default Header
