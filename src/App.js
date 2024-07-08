import { useState } from "react";
import Banner from "./Components/Banner";
import Form from "./Components/Form";
import Team from "./Components/Team";
import Footer from "./Components/Footer";

const App = () => {
    const lanes = [
        {
            jogador: "Top",
            corPrimaria: "#E06B69",
            corSecundaria: "#FDE7E8",
        },
        {
            jogador: "Jungle",
            corPrimaria: "#FF8A29",
            corSecundaria: "#FFEEDF",
        },
        {
            jogador: "Mid",
            corPrimaria: "#C133FF",
            corSecundaria: "#F7E6FF",
        },
        {
            jogador: "AdCarry",
            corPrimaria: "#FFBA05",
            corSecundaria: "#FFF5D9",
        },
        {
            jogador: "Suporte",
            corPrimaria: "#57C278",
            corSecundaria: "#D9F7E9",
        },
    ];

    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };

    return (
        <div className="App">
            <Banner />
            <Form
                lanes={lanes.map((lane) => lane.jogador)}
                aoColaboradorCadastrado={(colaborador) =>
                    aoNovoColaboradorAdicionado(colaborador)
                }
            />

            {lanes.map((lane) => (
                <Team
                    key={lane.jogador}
                    jogador={lane.jogador}
                    corPrimaria={lane.corPrimaria}
                    corSecundaria={lane.corSecundaria}
                    colaboradores={colaboradores.filter(
                        (colaborador) => colaborador.lane === lane.jogador
                    )}
                />
            ))}
            <Footer />
        </div>
    );
};

export default App;
