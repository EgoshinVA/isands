import { Outlet } from 'react-router-dom';
import { Header } from '../widgets/header/Header.tsx';
import './../shared/styles/global.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
