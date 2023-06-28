import CampoTexto from '../CampoTexto'
import ListaSuspansa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () => {

    const times = ['Programação', 'Front- end', 'Data Science', 'DevOps', 'UX e Design', 'Mobile', 'Inovação e Gestão']

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="selecione a imagem" />
                <ListaSuspansa itens={times}/>
            </form>
        </section>


    )


}

export default Formulario