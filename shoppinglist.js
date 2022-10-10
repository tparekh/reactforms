import React, {useState} from "react"; 
import Item from "./Item"

const handleSubmit = (e) => {
    e.preventDefault(); 
    const { email } = formData; 
    if(!isInvalid) {
        alert(`Added you to the maillisg list, ${email}`)
        setFormData(initialState)
    }
}




