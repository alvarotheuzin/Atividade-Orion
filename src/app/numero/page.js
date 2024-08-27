'use client'

import { useState } from "react";
import Pagina2 from "../components/Pagina2";
import { Button } from "react-bootstrap";

export default function page() {

    const [nome, setNome] = useState([0])

    function alterarNome() {
        const novoNome = nome == '0' ? '1' : '0'
        setNome(novoNome)
    }
    return (
        <Pagina2 titulo="Número">
            <Button onClick={alterarNome}>-</Button>
            <h1>{nome}</h1>
            <Button onClick={() => alterarNome('0')}>+</Button>
        </Pagina2>

    )
}