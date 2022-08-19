import React from "react";

export const Filtro = ({filter, setFilter}) => {
    


    const handleInputChange = ({ target }) => {
        setFilter(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <section className="filtrar">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="buscar"
                    placeholder="Nombre de la habitación"
                    value={filter}
                    onChange={handleInputChange}
                />
                <button type="submit">Buscar</button>
            </form>
        </section>
    )
}