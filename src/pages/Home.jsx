import ReactPlayer from "react-player";
import './Home.css';

const Home = () => {
    return (
        <>
        <section className="home">
                <div className="contenido">
                    <h1>Hola, Soy Encarnación Santana</h1>
                    <h3>Front Developer</h3>
                    <p>Me gusta la programación, desde el diseño de web, app, etc. Decí tomar este camino, porque me gusta, ya que no tiene que ver mis estudios realizados.</p>
                </div>
                <div className='Video'>
                    <ReactPlayer url="src/components/Pegote.mp4" controls="true" playing="true" width="150%" />
                </div>

            </section>

        </>
    )
} 

export default Home;