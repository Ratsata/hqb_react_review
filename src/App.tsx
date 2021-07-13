import './App.css';
import PerfilDesarrollador from './components/perfil-desarrollador/PerfilDesarrollador';

function App() {

  const perfiles: any = [
    {
      nombre: 'Sebastián Vega',
      edad: 25,
      tienePantalla: true
    },
    {
      nombre: 'Cristian Escobar',
      edad: null,
      tienePantalla: true
    },
  ]

  return (
    <div className="App">
      <PerfilDesarrollador perfiles={perfiles} />
    </div>
  );
}

export default App;
