import React, { useState, useEffect } from "react";
import FormCadres from './FormCadres/FormCadres';
import ListLink from './List_link/List_link';
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
    }
    useEffect(() => {
        localStorage.setItem('linkFaceBook', JSON.stringify(linkFB));
    }, [linkFB])
    let dataLinkFB = JSON.parse(localStorage.getItem('linkFaceBook'))

    // StarRating

    return (
        <div style={{display:'flex', justifyContent:'center', }}>
        <div style={{minHeight: '760px' , marginTop:'50px', border:'1px solid rgb(167, 164, 164)',minWidth:" 90vw", borderRadius:'8px', boxShadow:'rgb(167 164 164) -1px -3px 20px 0px'}} >
            <FormCadres onChangeLink={onChangeLink} handleButtonMore={handleButtonMore} link={link} />
            <ListLink dataLinkFB={dataLinkFB} linkFB={linkFB} openTableLink={openTableLink}  />
        </div>
        </div>
    );
}
export default Cadres;

