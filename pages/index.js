import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Login = (props) => {
  return (
    <>
      <div className="login-container">
        <Head>
          <title>Pedro's Bar</title>
          <meta property="og:title" content="TPI - Frontend" />
        </Head>
        <div className="login-main">
          <div className="login-header">
            <img
              id="logo"
              alt="image"
              src="/logo-square-1500w.jpg"
              className="login-logo"
            />
          </div>
          <div className="login-form">
            <span className="login-form-title">Iniciar sesión</span>
            <input
              type="text"
              id="inputUsuario"
              placeholder="Usuario"
              className="login-input input"
            />
            <input
              type="password"
              id="inputContraseña"
              placeholder="Contraseña"
              className="login-input input"
            />
            <Link href="/menu" id="botonIngresar">
              <a className="login-button button">Ingresar</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .login-container {
            width: 100vw;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-color-naranja);
          }
        `}
      </style>
    </>
  )
}

export default Login
