import Button from '../Button'
import DropDown from '../DropDown'
import TextField from '../TextField'
import './Form.css'

const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return(
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropDown obrigatorio={true} label="Times" itens={times}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form