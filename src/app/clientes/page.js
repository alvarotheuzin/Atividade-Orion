import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";

export default function Fundamentos(){


    return (
        <>
        <Cabecalho titulo="Clientes" subtitulo="Página de clientes usando o cabeçalho"/>
        <Link href="/">Página Inicial</Link><br />
        <Link href="/fundamentos">Página Fundamentos</Link><br />

        
        </>
        )
    }