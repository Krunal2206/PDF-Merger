import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
