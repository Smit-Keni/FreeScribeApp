import React , {useState,useEffect,useRef}from 'react'
import Transcription from './Transcription'
import Translation from './Translation'

export default function Information(props) {

  const {output} = props
  const [tab,setTab] = useState('transcription')
  const [translation,setTranslation] = useState(null)
  const [language,setLanguage] = useState('Select Language')
  const [translating,setTranslating] = useState(null)

  const worker=useRef()

  useEffect(()=>{
    if(!worker.current){
      worker.current =  new Worker(
        new URL('../utils/translate.worker.js',import.meta.url),{
          type:'module'
        })

      }

        const onMessageRecieved = async (e)=>{
          switch(e.data.status){
            case 'initiate':
              console.log('DOWNLOADING')
              break;
    
            case 'progress':
              console.log('LOADING')
              break;
    
            case 'update':
              setTranslation(e.data.results)
              console.log(e.data.results)
              break;
    
            case 'complete':
              setTranslating(false)
              console.log('DONE')
              break;
          }
        }
    
        worker.current.addEventListener('message',
          onMessageRecieved
        )
    
        return()=>worker.current.removeEventListener('message',onMessageRecieved)  
    
  })

  const textElement = tab === 'transcription'? 
  (output.map(val=>val.text)):translation||'No translation'


  function handleCopy(){
    navigator.clipboard.writeText(textElement)
  }

  function handleDownload(){
    const element = document.createElement('a')
    const file = new Blob([textElement],{type:'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download=`Freescribe_${(new Date()).toString()}.txt`
    document.body.appendChild(element)
    element.click()
  }

  function generateTranslation(){
      if(translating || language ==="Select Language"){
        return
      }

      setTranslating(true)

      worker.current.postMessage({
        text: output.map(val=>val.text),
        src_lang:'eng_Latn',
        tgt_lang:language
      })
  }

  
  return (
    
      <main className='flex-1 p-4 flex flex-col gap-3 sm:gap-4 
      justify-center text-center pb-20 max-w-prose w-full mx-auto '>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap'>Your
            <span className='text-blue-400 bold'> Transcription</span></h1>

        <div className='grid grid-cols-2 item-center mx-auto bg-white border-2
        border-solid border-blue-300 shadow rounded-full overflow-hidden'>
          <button onClick={()=>setTab('transcription')} className={'px-5 py-2 font-medium duration-200 ' + 
          (tab==='transcription'?'bg-blue-300 text-white':
            'text-blue-400 hover:text-blue-300'
          )}>Transcription</button>
          <button onClick={()=>setTab('translation')} className={'px-5 py-2 font-medium duration-200 ' + 
          (tab==='translation'?'bg-blue-300 text-white':
            'text-blue-400 hover:text-blue-300'
          )}>Translation</button>
        </div>
        <div className='my-8 flex flex-col'>
        {tab==='transcription'?(
          <Transcription {...props} textElement={textElement}/>
        ):
        (<Translation {...props} language={language} translating={translating} 
          textElement={textElement} setTranslation={setTranslation} setTranslating={setTranslating} 
        setLanguage={setLanguage} generateTranslation={generateTranslation}/>)}
        </div>
        <div className='flex items-center gap-4 mx-auto '>
          <button onClick={handleCopy} title='copy'className=' specialBtn text-slate-600 p-2 rounded px-4'>
          <i className="fa-solid fa-copy"></i>
          
          </button>
          <button onClick={handleDownload} title='download'className=' specialBtn text-slate-600 p-2 rounded px-4'>
          <i className="fa-solid fa-download"></i>
          
          </button>
        </div>
      </main>
  )
}
