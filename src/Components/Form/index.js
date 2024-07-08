import { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
    const [jogador, setJogador] = useState("");
    const [time, setTime] = useState("");
    const [imagem, setImagem] = useState("");
    const [lane, setLane] = useState("");

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            jogador,
            time,
            imagem,
            lane,
        });
        setJogador("");
        setTime("");
        setImagem("");
        setLane("");
    };

    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <TextField
                    obrigatorio={true}
                    label="Jogador"
                    placeholder="Digite o nick do jogador"
                    valor={jogador}
                    aoAlterado={(valor) => setJogador(valor)}
                />
                <TextField
                    obrigatorio={true}
                    label="Time"
                    placeholder="Digite o time"
                    valor={time}
                    aoAlterado={(valor) => setTime(valor)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={(valor) => setImagem(valor)}
                />
                <DropDown
                    obrigatorio={true}
                    label="Lane"
                    itens={props.lanes}
                    valor={lane}
                    aoAlterado={(valor) => setLane(valor)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
};

export default Form;
