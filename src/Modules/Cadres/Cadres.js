import React, { useState, useEffect } from "react";
import FormCadres from "./FormCadres/FormCadres";
import ListLink from "./List_link/List_link";
import axios from "axios";
function Cadres() {
  const [openTableLink, setOpenTableLink] = useState(false);
  const [listInfo, setListInfo] = useState([]);
  const [link, setLink] = useState({
    NameCTV: "",
    Department: "",
    Specialized: "",
    linkfb: "",
    rating: "",
  });
  // const [resListInfo, setResListInfo] = useState([]);
  const onChangeLink = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLink({ ...link, [name]: value });
  };
  // const [check , setCheck ] = useState(false);
  // const checkExists = () => {
  //   for(let i = 0 ; i <= listInfo.length ; i++) {
  //       if(valueFB === listInfo[i].linkfb){
  //           alert("aaaaaaaa")
  //       }
  //   }
  // }
  // console.log(checkExists);
  // console.log( listInfo.filter((item) => item.linkfb === valueFB ));
  const handleButtonMore = () => {
    const valueFB = document.getElementById("More__Link__FB").value;
    console.log(listInfo);
    let checkListInfoLink = listInfo.filter((item) => item.linkfb === valueFB);
    // console.log(checkListInfoLink);
    if (valueFB === "") {
      alert("Hãy nhập Link FaceBook");
    }
     else if (checkListInfoLink) {
      alert("Link Facebook đã tồn tại");
    }
     else {
      axios
        .post("http://localhost:8080/api/customer/create", link)
        .then((res) => {
          setListInfo([link, ...listInfo]);
          // console.log(res);
        })
        .catch((err) => console.log(err));
    }
    setLink({ NameCTV: "" });
  };

  // get data
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/customer/list")
      .then((res) => {
        setListInfo(res.data.docs);
      })
      .catch((err) => console.log(err));
  }, []);
  
  // custom edit (xóa)
  //   console.log(listInfo);
  const HandleDelete = async (id) => {
    console.log(listInfo[id]._id);
    await axios
      .delete(`http://localhost:8080/api/customer/delete/${listInfo[id]._id}`)
      .then((res) => {})
      .catch((err) => console.log(err));
    await axios
      .get("http://localhost:8080/api/customer/list")
      .then((res) => {
        setListInfo(res.data.docs);
      })
      .catch((err) => console.log(err));
  };
  //   search
  // useEffect(() => {
  //   if (link.NameCTV === "ALL") {
  //     setResListInfo(listInfo);
  //   } else {
  //     setResListInfo(listInfo.filter((item) => item.NameCTV === link.NameCTV));
  //   }
  // }, [link.NameCTV]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          minHeight: "760px",
          marginTop: "50px",
          border: "1px solid rgb(167, 164, 164)",
          minWidth: " 90vw",
          borderRadius: "8px",
          boxShadow: "rgb(167 164 164) -1px -3px 20px 0px",
        }}
      >
        <FormCadres
          onChangeLink={onChangeLink}
          handleButtonMore={handleButtonMore}
          link={link}
        />
        <ListLink
          // resListInfo={resListInfo}
          HandleDelete={HandleDelete}
          listInfo={listInfo}
          openTableLink={openTableLink}
          setLink={setLink}
          setListInfo={setListInfo}
        />
      </div>
    </div>
  );
}
export default Cadres;
