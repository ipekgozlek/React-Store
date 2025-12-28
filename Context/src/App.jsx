import './App.css'
import Button from './components/Button.jsx';
import { useTheme } from './context/ThemeContext.jsx';
function App() {
  const theme = useTheme();

  return (
    <>
      <div className ={`app ${useTheme().theme}`}>
        <h1>Context Uygulama</h1>
        <Button />
      </div>
    </>
  );
}

export default App
