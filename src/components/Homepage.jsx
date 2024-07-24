import React from 'react'

export default function Homepage(props) {
     const {setAudioStream,setFile}=props

  return (
    <main className='flex-1 p-4 flex flex-col gap-3 sm:gap-4 
    md:gap-5 justify-center text-center pb-20'>
        <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>Free<span className='text-blue-400 bold'>Scribe</span></h1>
        <h3 className='font-semibold '>Record
            <span className='text-blue-400 '>&rarr;</span>Transcribe<span className='text-blue-400'>
                &rarr;</span>Translate</h3>

        <button className='flex item-center text-base justify-between
         gap-4 mx-auto w-72 max-w-full my-4 specialBtn px-4 py-2 rounded-xl'>
            <p className='font-semibold text-blue-400'>Record</p>
            <i className="fa-solid fa-microphone pt-1"></i>
        </button>
        <p>Or <label className='font-semibold text-blue curson-pointer hover:text-blue-400 duration-200'>upload 
            <input onChange={(e)=>{
                const tempFile=e.target.files[0]
                setFile(tempFile)
            }}className='hidden' type='file' accept='.mp3,.wave'></input>
        
        </label> an mp3 file</p><br></br>
        <p className='text-3xl font-base'>Free <span className='text-blue-400'>now</span>. Free <span className='text-blue-400'>forever</span>.</p>
    </main>
  )
}
