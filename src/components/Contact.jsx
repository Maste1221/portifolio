import React from 'react'

function Contact() {
  return (
    <div className='max-w-[1220px] mx-auto bg-black sm:py-20 p-5 '>
      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight primary-color '>Contact me</h2>
        <div className='max-w-[800px] mx-auto'>
            <div className='mt-6 bg-[#161616] rounded-xl'>
                <div className='p-10'>

<form action='3' method='POST'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
<div>
    <div className='mt-2 relative'>
        <input type='text'name='name' id='' placeholder='name'
        className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />

    </div>
    <div className='mt-2 relative'>
        <input type='text'name='name' id='' placeholder='name'
        className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />

    </div>
    <div className='mt-2 relative'>
        <input type='text'name='name' id='' placeholder='name'
        className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />

    </div>
    <div className='mt-2 relative'>
        <input type='text'name='name' id='' placeholder='name'
        className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />

    </div>
    <div className='sm:col-span-2'>
        <div className='mt-2'>
            <textarea name='' id='' placeholder='message'
            className='bg-[161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' ros>

            </textarea>

        </div>

    </div>
    
</div>
<div className='sm:col-span-2'>
    <button type='submit' className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md'>
Send

    </button>

</div>
    </div>

</form>
                </div>

            </div>

        </div>
        </div>  
    </div>
  )
}

export default Contact