import React from 'react'

const Header = () => {
  return (
    <>
        <div className="flex  justify-center gap-x-3">
            <img className='h-14 w-14' src={"https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png"}/>
            <h1 className='font-bold mb-10'>Minecraft assignment</h1>
        </div>
        <p className='text-neutral-500'>Search for a username to check if it is a valid user </p>
  </>
  )
}

export default Header