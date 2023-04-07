import "./Footer.css"

const Footer = () => {
    return <footer className="Footer" style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className="redes">
            <a href="http://www.aluracursos.com/">
                <img src="/img/facebook.png" alt="facebook"/>
            </a>
            <a href="http://www.aluracursos.com/">
                <img src="/img/twitter.png" alt="twitter"/>
            </a>
            <a href="http://www.aluracursos.com/">
                <img src="/img/instagram.png" alt="instagram"/>
            </a>
        </div>
        <img src="/img/logo.png" alt="org"/>
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer