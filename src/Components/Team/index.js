import Colaborador from "../Colaborador";
import "./Team.css";

const Team = (props) => {
    return props.colaboradores.length > 0 ? (
        <section
            className="team"
            style={{ backgroundColor: props.corSecundaria }}
        >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.jogador}</h3>
            <div className="colaboradores">
                {props.colaboradores.map((colaborador) => (
                    <Colaborador
                        corDeFundo={props.corPrimaria}
                        key={colaborador.jogador}
                        jogador={colaborador.jogador}
                        time={colaborador.time}
                        imagem={colaborador.imagem}
                    />
                ))}
            </div>
        </section>
    ) : (
        ""
    );
};

export default Team;
