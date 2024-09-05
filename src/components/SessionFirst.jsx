
import React, { useState } from 'react';
import useStore from '../store/Bell-store';
import Section1 from './Section1';

const SessionFirst = () => {
    const { arr, addArr, delArr } = useStore((state) => ({
        arr: state.arr,
        addArr: state.addArr,
        delArr: state.delArr,
    }));

    const [txt, setTxt] = useState('');

    const handleChange = (e) => {
        setTxt(e.target.value);
    };

    const handleClick = () => {
        if (txt.trim()) {
            addArr(txt);
            setTxt(''); 
        }
    };

    const handleDelete = (id) => {
        delArr(id);
    };

    return (
        <div className='bg-pink-300'>

     
            <h1>Todo List</h1>
            <input className='bg-slate-300 border'
                type="text"
                value={txt}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Add</button>

            <ul>
                {arr.map((item, index) => (
                    <li key={item.id}>
                        <Section1 item={item} index={index} />
                        <button className="bg-red-500 py-4 p-6  h-full
                        rounded-md  text-left hover:scale-105 
                        hover:shadow-md hover:duration-200 hover:cursor-pointer 
                        hover:-translate-y-1" onClick={() => handleDelete(item.id)}>del</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SessionFirst;
