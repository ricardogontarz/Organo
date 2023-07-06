import './Rodape.css'

const Rodape = () =>{
    return(<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='https://www.facebook.com/ricardo.gontarz/' target='_blank'>
                        <img src='/imagens/fb.png' alt='facebook'/>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/ricardogontarz/' target='_blank'>
                        <img src='/imagens/ig.png' alt='instagram'/>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/ricardogontarz' target='_blank'>
                        <img src='/imagens/gh.png' alt='github'/>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src='/imagens/logo.png' alt='logo'/>
        </section>
        <section>
            <p>
                Desenvolvido por Ricardo Gontarz com Alura.
            </p>
        </section>
    </footer>
    )
}

export default Rodape