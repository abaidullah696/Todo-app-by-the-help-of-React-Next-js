"use client"
import React, { useState } from 'react'
const page = () => {
    const [title, settitle] = useState("")
    const [Description, setDescription] = useState("")
    const [mainTask, setmainTask] = useState([])
    const submitHandler = (e)=>{
        e.preventDefault()
        setmainTask ([...mainTask, {title,Description}])
        settitle("")
        setDescription("")
        console.log(mainTask)
    }
    const deleteHandler = (i) => {
        let copytask = [...mainTask]
        copytask.splice(i, 1)
        setmainTask(copytask)
    }
    let renderTask = <h2>No Task Available</h2>

    if (mainTask.length > 0) {
        renderTask = mainTask.map((t,i) => {
            return (
                <li key={i} className='flex items-center justify-between'>
                <div className='flex justify-between mb-5 w-2/3'>
                    <h5 className='text-xl font-semibold'>{t.title}</h5>
                    <h6 className='text-xl font-semibold '>{t.Description}</h6>
                    <button 
                    onClick={()=>{
                        return deleteHandler(i)
                    }}
                    className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
                </div>
                </li>
            )
        })
    }
    return (
    <>
        <div className='bg-black text-white text-7xl text-center p-20 font-bold'>Abaidullah`s Todolist</div>
        <form onSubmit={submitHandler}>
            <input 
            placeholder='Enter Title here' 
            className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
            value={title}
            onChange={(e) => {
                settitle(e.target.value)    
            }}
            type='text'/>
            <input 
            placeholder='Enter Description here' 
            className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' 
            value={Description}
            onChange={(e) => {
                setDescription(e.target.value)    
            }}
            type='text'/>
            <button className='bg-black text-white px-5 py-2 text-2xl font-bold rounded'>Add Task</button>
        </form>
        <hr/>
        <div className='p-8 bg-slate-500'>
            <ul>{renderTask}</ul>
        </div>
    </>    
  )
}

export default page