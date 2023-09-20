import './Porfolio.css'

const Porfolios = () => {
    return (
        <>
            <h1>
                FORMULARIO DE PROYECTO
            </h1>
            <form action="procesar_formulario.php" method="post">
                <label htmlFor="nombre" >Nombre del Proyecto:</label>
                <input type="text" id="nombre" name="nombre" required></input>

                <label htmlFor="descripción">Descripción:</label>
                <textarea id="descripción" name="descripción" required></textarea>

                <label htmlFor="imagen">Imagen del Proyecto:</label>
                <input type="file" id="imagen" name="imagen" required></input>

                <label htmlFor="repositorio">Enlace de Repositorio:</label>
                <input type="url"id="repositorio"name="repositorio"required></input>

                <label htmlFor="despliegue">Enlace de Despliegue:</label>
                <input type="url"id="despliegue"name="despliegue"required></input>

                <input type="submit"value="Enviar"></input>
            </form>
            
        </>
    )
}

export default Porfolios;