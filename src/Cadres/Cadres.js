import React, { useState, useEffect } from "react";
import FormCadres from './FormCadres/FormCadres';
import ListLink from './List_link/List_link';
import StarRating from "../Share/StarRating/StarRating";
function Cadres() {
    const [openTableLink, setOpenTableLink] = useState(false)
    const [linkFB, setLinkFB] = useState([])
    const [link, setLink] = useState({
        linkfb: ""
    })
    const onChangeLink = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLink({ ...link, [name]: value })
      console.log(link)
    }
    const handleButtonMore = () => {
        setLinkFB([...linkFB,  link ])
      console.log("AÂ");
      console.log(link)
    }
    useEffect(() => {
        localStorage.setItem('linkFaceBook', JSON.stringify(linkFB));
    }, [linkFB])
    let dataLinkFB = JSON.parse(localStorage.getItem('linkFaceBook'))

    // StarRating

    return (
        <>
            <FormCadres onChangeLink={onChangeLink} handleButtonMore={handleButtonMore} link={link} />
            <ListLink dataLinkFB={dataLinkFB} linkFB={linkFB} openTableLink={openTableLink}  />
            <StarRating/>
        </>
    );
}
export default Cadres;