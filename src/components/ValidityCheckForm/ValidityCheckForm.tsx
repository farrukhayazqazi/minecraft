import React from 'react';


interface ValidityCheckFormProps {
    isLoading: boolean;
    handleSubmit: (e: any) => Promise<void>;
    handleChange: (e: any) => void;
    message?: Record <string, any>
    error?: string;
}

const ValidityCheckForm = (props: ValidityCheckFormProps) => {
    const { isLoading, handleSubmit, handleChange, message, error } = props;
  return (
    <div className=" h-[24rem] text-center flex items-center justify-center">
        <form className='space-y-6 w-[35rem] border border-neutral-200 rounded-md p-10' onSubmit={handleSubmit}>
        <input className='w-full p-2' placeholder='Enter username here' type="text" onChange={handleChange}/>
        <button className='w-full flex items-center justify-center' disabled={isLoading} type="submit" onClick={handleSubmit}>
        { isLoading && <img className="animate-spin h-5 w-5 mr-3" src={"https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png"}/>}
            Submit
        </button>
        <p className='text-green-500 font-bold'>{message?.uuid && 'This is a valid user'}</p>
        <p className='text-red-500 font-bold'>{error}</p>
        </form>
  </div>
  )
}

export default ValidityCheckForm