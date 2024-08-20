import Cabecalho from "./components/Cabecalho";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="primary">Primary</Button>{' '}

      <Cabecalho titulo="Alvaro" subtitulo="Agora vai"/>
      <Cabecalho titulo="Matheus"/>
      <Cabecalho titulo="Alves"/>
      <Cabecalho titulo="Silva"/>


      <Link href="/fundamentos">Página Fundamentos</Link><br />

    </main>
  );
}
