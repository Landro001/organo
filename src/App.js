import { useState } from 'react';
import Banner from './Components/Banner';
import Form from './Components/Form';
import Team from './Components/Team';

const App = () => {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado= (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Team nome="Programação"/>
      <Team nome="Front-End"/>
      <Team nome="Data Science"/>
    </div>
  );
}

export default App;
