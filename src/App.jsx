import GlobalStyle from './styles/GlobalStyle';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
