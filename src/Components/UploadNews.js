import './UploadNews.css';
import React, { useEffect, useState } from 'react';

const UploadNews = () => {
useEffect(() => {
    window.scroll(0, 0)
}, []);



    const [descripcion, setDescripcion] = useState("");
    const [titulo, setTitulo] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {titulo, descripcion};
            const response = await fetch ("http://localhost:5000/publicacion", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });


            //que me lleve a calendario despues
            window.location = "/Calendario"

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className='UploadNews text-center'>
            <>
                <h1 className='text-center'>Nueva Publicación:</h1>
                <form className='mt-5' onSubmit={onSubmitForm}>
                    <input type='text' className='form-control' placeholder='Titulo' value={titulo} onChange={e => setTitulo(e.target.value)}/>
                    <textarea type='text' className='form-control mt-5' placeholder='Descripcion' value={descripcion} onChange={e => setDescripcion(e.target.value)}/>
                    <button className='btn btn-success mt-5'>Publicar</button>
                </form>
            </>
        </div>
    );
}

export default UploadNews;