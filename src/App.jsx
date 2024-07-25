import React ,{ useState } from 'react'
import Homepage from './components/Homepage'
import Header from './components/Header'
import FileDisplay from './components/FileDisplay'
import Information from './components/Information'
import Transcribing from './components/Transcribing'


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)
  const [output,setOutput] = useState(null)
  const [loading,setLoading] = useState(true)

  const isAudioAvailable = file || audioStream

  function handleAudioReset(){
    setFile(null)
    setAudioStream(null)
  }

  return (
    <div className='felx flex_col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header/>
        {output?(<Information/>):
        loading?(<Transcribing/>):
          isAudioAvailable?(<FileDisplay file={file} audioStream={audioStream} handleAudioReset={handleAudioReset}/>):
          (<Homepage setFile={setFile} setAudioStream={setAudioStream}/>)}
  
      </section>
      <h1 className='text-3xl font-bold underline'>Hello</h1>
      <footer>

      </footer>

    </div>
  )
}

export default App
