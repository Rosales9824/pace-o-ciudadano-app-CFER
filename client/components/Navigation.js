import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation = props => {
  //useSelector to extract the initial state(auth reducer)
  const auth = useSelector(state => state.auth);

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Bienvenid@ <small>PACEÑO CIUDADANO</small></a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Dashboard</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/createComplaint">Hacer Queja</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Entrar</Link>
            </li>
          </ul>
        </div>
        <span className="navbar-text">
          {
            auth.isLoggedIn ?
              (<div className="text-center">
                <img src={auth.profileObj.imageUrl} className="rounded-circle" style={{ width: 30, height: "auto" }} />
                <span> | </span><span>Hola, {auth.profileObj.name}</span>
              </div>) :
              <div className="text-center">
                No se ha registrado
              </div>
          }
        </span>
      </nav>
    </>
  )
};

export default Navigation;