import { useEffect } from "react"
import { useState } from "react"

interface Perfil {
    nombre: string,
    edad: number,
    tienePantalla: boolean
}

//Propiedades del Componente
interface PerfilDesarrolladorProps {
    perfiles: Perfil
}

const PerfilDesarrollador = (props: PerfilDesarrolladorProps) => {
    //Variable de estado para trabajar con las propiedades ingresadas
    const [perfiles, setPerfiles] = useState<any>([])

    //Asignar valor a la variable de estado cuando las propiedades se vean modificadas
    useEffect(() => {
        setPerfiles(props.perfiles)
    }, [props])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    Perfil del Desarrollador
                    <ol>
                        {perfiles.map((perfil: Perfil, i: number) => (
                            <div key={i}>
                                <li>Nombre: {perfil.nombre}</li>
                                <li>Edad: {perfil.edad}</li>
                                {(perfil.tienePantalla) ? 'Tiene Pantalla' : 'No Tiene Pantalla'}
                                <hr />
                            </div>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default PerfilDesarrollador