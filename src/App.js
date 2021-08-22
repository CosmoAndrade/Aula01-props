import "./styles.css";

function BemVindo(props) {
  return (
    <>
      <h1> Bem-Vindo - {props.nome} </h1>
      <h2> Tenho {props.idade} anos </h2>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <BemVindo nome="Cosmo" idade="36" />
      <BemVindo nome="Lucas" idade="16" />
    </div>
  );
}
