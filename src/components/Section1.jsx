import React, { useState } from 'react';
import useStore from '../store/Bell-store';
import { toast } from "react-toastify";


const Section1 = ({ item, index }) => {
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(item?.title || '');

    const { editArr, changeStatus } = useStore((state) => ({
        editArr: state.editArr,
        changeStatus: state.changeStatus,
    }));

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleEdit = () => {
        setEdit(!edit);
    };

    const handleConfirm = (id) => {
        setEdit(!edit);
        editArr(id, title);
        toast.success(`Edit ${title} Success!!`);
    };

    const handleChangeStatus = (id, status) => {
        changeStatus(id, status);
        toast.info(`Update status Ok`);
    };

    return (
        <div >
            <div
                className={`bg-${item.status ? "red" : "blue"}-100 border border-blue-900 py-4 p-6 
                    rounded-md w-full text-left hover:scale-105 
                    hover:duration-200 hover:shadow hover:cursor-pointer`}
            >
                {edit ? (
                    <input
                        className="rounded-md p-1 border px-3 w-full"
                        type="text"
                        value={title}
                        onChange={handleChangeTitle}
                    />
                ) : (
                    <div
                        className="relative"
                        onClick={() => handleChangeStatus(item.id, !item.status)}
                    >
                        <p className={`${item.status ? "line-through" : ""}`}>
                            {index + 1}. {item.title}
                        </p>
                    </div>
                )}
            </div>
            <div>
                {edit ? (
                    <button
                        className="bg-blue-100 py-4 p-6  h-full
                        rounded-md  text-left hover:scale-105 
                        hover:shadow-md hover:duration-200 hover:cursor-pointer 
                        hover:-translate-y-1"
                        onClick={() => handleConfirm(item.id)}
                    >
                        Confirm
                    </button>
                ) : (
                    <button
                        disabled={item.status}
                        className={`bg-${item.status ? "gray" : "yellow"}-100 py-4 p-6  h-full
                        rounded-md  text-left hover:scale-105 
                        hover:shadow-md hover:duration-200 hover:cursor-pointer 
                        hover:-translate-y-1`}
                        onClick={handleEdit} 
                    >
                      Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default Section1;
