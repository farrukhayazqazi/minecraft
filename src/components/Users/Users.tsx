import React from 'react';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { IconButton } from '@mui/material';

interface Props {
    users: Record<string, any>[];
    onDelete: (user: Record<string, any>) => void;
}

const Users = (props: Props) =>{
    const {users, onDelete} = props;
  return (<div className="">
        <h2 className='font-bold'>Users</h2>
        <div className="rounded-md space-y-4  inline-block min-w-[10rem] items-baseline gap-8">
            { 
            users?.map((user) => (
                <div className="flex gap-x-2">
                    <div className='flex bg-[white] h-12 rounded-md min-w-[8rem] items-center gap-x-2 px-2'>
                        <img className='rounded-lg h-10 w-10' src={`https://crafatar.com/avatars/${user?.uuid}`}/>
                        <p className='text-neutral-900'>{user?.username}</p>
                    </div>
                    <button className='border border-neutral-200' onClick={() => onDelete(user)}>delete</button>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Users