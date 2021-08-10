import React from "react"
import './Login.scss';

const Login = () => {
    //Referencias
    const correoRef : any = React.createRef();
    const passwordRef : any = React.createRef();

    //Acción del botón Login
    const handlerOnClick = (event: any) => {
        if(correoRef.current.value != ""){
            passwordRef.current.focus()
        }else{
            correoRef.current.focus()
        }
    }

    return (
        <main className="main">
            <div className="container">
                <section className="wrapper">
                    <div className="heading">
                        <h1 className="text text-large">Login</h1>
                    </div>
                    <form name="login" className="form">
                        <div className="input-control">
                            <label className="input-label" hidden>Correo Electrónico</label>
                            <input type="email" name="email" ref={correoRef} className="input-field" placeholder="Correo Electrónico" />
                        </div>
                        <div className="input-control">
                            <label className="input-label" hidden>Contraseña</label>
                            <input type="password" name="password" ref={passwordRef} className="input-field" placeholder="Contraseña" />
                        </div>
                        <div className="input-control">
                            &nbsp;
                            <input type="button" name="submit" className="input-submit" value="Login" onClick={handlerOnClick} />
                        </div>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Login