import { create } from 'zustand'
import React from 'react'
// import { persist } from "zustand/middleware";

const bellstore = (set) =>({
arr:[
{ id:1,title:'work1',status: true},
{id:2,title:'work2', status: false},

]
,
addArr:(newValue)=>set((state)=>({
arr:[...state.arr,{id:Date.now(),title:newValue}]
}))
,
delArr:(id)=>set((state)=>({
 arr: state.arr.filter((item,index)=>(
            item.id != id
 ))
})),

editArr: (id, newTitle) =>
    set((state) => ({
      arr: state.arr.map((item, index) =>
        item.id == id ? { ...item, title: newTitle } : item
      ),
    })),
    changeStatus:(id,newStatus)=>set((state)=>({
        arr: state.arr.map((item,index)=> item.id== id ?{...item, status:newStatus}: item)
    }))




})


// const usePersist = {
//   name: "Bell-store",
//   getStorage: () => localStorage,
// };

const useStore = create(bellstore);

export default useStore
