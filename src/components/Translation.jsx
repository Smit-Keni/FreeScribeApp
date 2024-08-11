import React from 'react'
import {LANGUAGES} from '../utils/Presets'

export default function Translation(props) {

  

  const {textElement,language,setLanguage,translating,setTranslating,generateTranslation} = props
  return (
    <div className='flex flex-col gap-3 max-w-[400px] w-full mx-auto'>
      {(<div className='flex flex-col'>
        <p className='text-xd sm:text-sm font-medium text-slate-500'>To language</p>
      <div className='flex'>
        <select className='outline-none bg-white focus-ouline-none border border-solid border-transparent 
        hover:border-blue-300 rounded font-semibold' value={language} onChange={(e)=>setLanguage(e.target.value)}>
           <option value={'Select Language'}>Select Language</option>
           {Object.entries(LANGUAGES).map(([key,value])=>{
            return (
              <option key={key} value={value} className='text-black'>{key}</option>
            )
           })}
        </select>
        <button onClick={generateTranslation} className='specialBtn px-3 font-semibold rounded py-2 rounded-lg text-blue-400
         hover:text-blue-600 duration-200 '>Translate</button>
      </div>
      </div>)}
      {(textElement  && !translating) &&(
        <p>{textElement}</p>
      )}
      {translating &&(
        <div className='grid place-items-center'>
          <i className="fa-solid fa-spinner animate-spin"></i>
        </div>
      )}
    </div>
  )
}
