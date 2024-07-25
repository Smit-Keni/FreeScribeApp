import React from 'react'

export default function FileDisplay(props) {
    const {handleAudioReset,file,audioStream,handleFormSubmission} = props
  return (
    <main className='flex-1 p-4 flex flex-col gap-3 sm:gap-4 
    md:gap-5 justify-center text-center pb-20 w-fit max-w-full mx-auto sm:w-96'>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>Your
            <span className='text-blue-400 bold'> File</span></h1>
            <div className='mx-auto flex flex-col test-left my-4'>
              <h3 className='font-semibold'>File:</h3>
              <p>{file? file?.name:'Recorded Audio'}</p>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <button onClick={handleAudioReset} className='text-slate-400 hover:text-blue-600 duration-300'>
                Reset</button>
              <button onClick={handleFormSubmission} className='specialBtn p-2 rounded-lg text-blue-400 flex items-center gap-2 font-medium'>
                <i className="fa-solid fa-pen-fancy"></i>
                <p>Transcribe</p>
   
                </button>
            </div>
        
    </main>
  )
}
