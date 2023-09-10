import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="contact">
                <p>Nombre:Encarnación Santana</p>
                <p>Email:santanahormigaencarna@gmail.com</p>
                <p>Teléfono:+34678-341-397</p>
            </div>

            <div className="linkedin">

                <a href="https://www.linkedin.com/in/encarna-hormiga-30517b124/"><p>Perfil Linkedln</p></a>
            </div>
            <div className="languages">
                <p>Lenguajes y Tecnologías</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Trello</li>
                    <li>Figma</li>
                    <li>GitHub</li>
                    <li>Node</li>
                </ul>
            </div>
            <div className="hobbies">
                <p>Aficiones y Pasatiempos:</p>
                <ul>
                    <li>Caminar</li>
                    <li>Leer Libros</li>
                    <li>Series y Animes</li>
                    <li>Música</li>
                    <li>Manualidades</li>
                </ul>
            </div>

            <div className="resume-link">
                <a href="src/components/CURRICULUM ENCARNACION.pdf">Descargar Currículum</a>
            </div>



        </>
    )
}

export default Contact;