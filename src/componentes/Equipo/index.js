import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"
import "./Equipo.css"

const Equipo = (props) => {

    //Destruccuración

    const {colorPrimario, colorSecundario, titulo , id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = {borderColor: colorPrimario}

    return <>
        { colaboradores.length > 0 &&
            <section className="Equipo" style={obj}>
                <input type="color" className="color" 
                    value={hexToRgba(colorPrimario, 0.6)} 
                    onChange={(e) => {
                        actualizarColor(e.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador,i)=> <Colaborador datos={colaborador} 
                            key={i} colorPrimario={colorPrimario} 
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </> 
}

export default Equipo