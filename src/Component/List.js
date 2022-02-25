import React, { useState } from "react";
import EditModal from "./EditModal";

const List = () =>{
       
    const [showModal,setShowModal] = useState(false);
    const [selectedList, setSelectedList] = useState({})
    let userData = [
        {
            name:"Raju",
            email:"raju789@gmail.com",
            mobile:"877789999",
            job:"pharma"
        },
        {
            name:"Rastogi",
            email:"rato789@gmail.com",
            mobile:"877769999",
            job:"pharma"
        },
        {
            name:"Quintus",
            email:"quintus769@gmail.com",
            mobile:"787789999",
            job:"phsyrma"
        },
        {
            name:"alma",
            email:"rose589@gmail.com",
            mobile:"855789999",
            job:"psyma"
        },
    ];
    const handleModalOpen = (data) =>{
        setSelectedList(data) 
        setShowModal(true)
    }
    const handleClose = () =>{
        setShowModal(false)
    }
    console.log(selectedList)

    return(

        <div>
            <h3 className="text-center "> Users List</h3>
            {
                userData.map((data,index) =>{
                    return(

                        <div className="list-container" key={index}>
                            <div>{data.name}</div>
                            <div>{data.email}</div>
                            <div>{data.mobile}</div>
                            <div>{data.job}</div>
                            
                            <div onClick={()=>handleModalOpen(data)}>
                                <img className="edit-list-icon" src="https://cdn-icons-png.flaticon.com/512/1159/1159876.png"/>
                                </div>
                        </div>
                    );
                })}
            {showModal && <EditModal editData={selectedList} handleClose={handleClose}/>}
        
             

        </div>
    );
};
export default List;