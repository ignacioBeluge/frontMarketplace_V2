//Componente maquetar
// estructura de la tarjeta 
// componente dumb 

const ProductCard = ({name, description, price, image}) => {
    console.log("Imagen recibida:", image)
    return (
        <>
        <h3> Nombre: {name}</h3>
        <p> Descripcion: {description} </p>
        <p> Precio: {price} </p>
        <div> 
            {image && (
                <img
                src = {`data:image/jpeg;base64,${image}`}
                />
            )}
        </div>
        </>
    )
}

export default ProductCard;