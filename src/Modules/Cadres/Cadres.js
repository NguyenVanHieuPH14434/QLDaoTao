import React, { useState, useEffect, useRef, useMemo } from "react";
import FormCadres from './FormCadres/FormCadres';
import ListLink from './List_link/List_link';
import axios from 'axios';
function Cadres() {
    const [updateLinkFB, setUpdateLinkFB] = useState([])
    const [listLinkFB, setListLinkFB] = useState([])
    const [link, setLink] = useState({
        NameCTV: "",
        Department: "",
        Specialized: "",
        linkfb: "",
    })
    // console.log(link)
    const onChangeLink = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLink({ ...link, [name]: value })
    }

    // add
    const handleButtonMore = () => {
        const valueFB = document.getElementById("More__Link__FB").value;
        if (valueFB == "") {
            alert("Hãy nhập Link FaceBook")
        }
        else {
            axios.post('http://localhost:8080/api/customer/create', link)
                .then(res => {
                })
                .catch(err => console.log(err))
        }
        setLink({ linkfb: "" })
    }
    // get API
    useEffect(() => {
        axios.get('http://localhost:8080/api/customer/list').then(
            res => {
                setListLinkFB(res.data.docs)
            }).catch(err => console.log(err))
    }, [link])
    // custom edit (xóa)
    const HandleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/customer/delete/${listLinkFB[id]._id}`)
            .then(() => {
                return axios.get('http://localhost:8080/api/customer/list').then(
                    res => {
                        setListLinkFB(res.data.docs)
                    }).catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
    // update

    return (
        <div style={{ display: 'flex', justifyContent: 'center', }}>
            <div style={{ minHeight: '760px', marginTop: '50px', border: '1px solid rgb(167, 164, 164)', minWidth: " 90vw", borderRadius: '8px', boxShadow: 'rgb(167 164 164) -1px -3px 20px 0px' }} >
                <FormCadres onChangeLink={onChangeLink} handleButtonMore={handleButtonMore} link={link} />
                <ListLink HandleDelete={HandleDelete} listLinkFB={listLinkFB} />
            </div>
        </div>
    );
}
export default Cadres;

