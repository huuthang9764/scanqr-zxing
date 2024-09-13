import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import CodeInput from './components/CodeInput';
import ReactZxing from './components/ReactZxing';

function App() {
  const [allowAccess, setAllowAccess] = useState(false);

  const handleBack = () => {
    setAllowAccess(false);
  }

  return (
    <>
      <Header />

      <main className="overflow-y-auto max-h-main-content container mt-header mb-5">
        {allowAccess ? (
          <ReactZxing onBack={handleBack} />
        ) : (
          <CodeInput setAllowAccess={setAllowAccess} />
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
