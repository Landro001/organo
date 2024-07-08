import "./Colaborador.css";

const Colaborador = ({ jogador, imagem, time, corDeFundo }) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={jogador} />
            </div>
            <div className="rodape">
                <h4>{jogador}</h4>
                <h5>{time}</h5>
            </div>
        </div>
    );
};

export default Colaborador;
