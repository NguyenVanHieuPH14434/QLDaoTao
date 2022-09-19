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
  });
  const [resListInfo, setResListInfo] = useState([]);
  const onChangeLink = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLink({ ...link, [name]: value });
  };
  const handleButtonMore = () => {
    const valueFB = document.getElementById("More__Link__FB").value;
    let checkLink = listInfo.filter((item) => item.linkfb === valueFB)
    console.log();
    if (valueFB === "") {
      alert("Hãy nhập Link FaceBook");
    }
    else if (checkLink[0]) {
      alert("link FaceBook đã tồn tại");
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
    setLink({ NameCTV: "ALL" });

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
  const HandleDelete = async (id) => {
    // console.log(listInfo[id]._id);
    await axios
      .delete(`http://localhost:8080/api/customer/delete/${resListInfo[id]._id}`)
      .then((res) => { })
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
  //   setResListInfo(
  //     listInfo.filter((item) => item.NameCTV === link.NameCTV)
  //   )
  // }, [link]);

  // filter CTV
  const [valueNameCTV, setValueNameCTV] = useState('')
  const [valueDepartment, setValueDepartment] = useState('')
  const [valueSpecialized, setValueSpecialized] = useState('')
  const [valueDate, setValueDate] = useState('')
  const convertDate = valueDate.split('-').reverse()
  const confirmDateFilter = `${convertDate[0]}/${convertDate[1]}/${convertDate[2]}`;
  const handleFilter = () => {
    const filterListCTV = listInfo.filter((item) => {
      if (valueNameCTV) {
        return item.NameCTV === valueNameCTV
      }
      else {
        return listInfo
      }
    }).filter((item)=>{
      if(confirmDateFilter){
        return item.ctime === confirmDateFilter

      }
    }).filter((item)=>{
      if(valueDepartment){
        return item.Department === valueDepartment

      }
    }).filter((item)=>{
      if(valueSpecialized){
        return item.Specialized === valueSpecialized

      }
    })
    setResListInfo(filterListCTV)
  }

  // filter date

  // const handleFilterDate = () => {
  //   const filterDate = listInfo.filter((item) => {
  //     if (valueDate !== '') {
  //       return item.ctime === confirmDateFilter
  //     }
  //     else {
  //       return listInfo
  //     }
  //   })
  //   setResListInfo(filterDate)
  // }


  const handleAllLink = () => {
    setResListInfo(listInfo)
  }




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
          handleFilter={handleFilter}
          setValueNameCTV={setValueNameCTV}
          setValueDepartment={setValueDepartment}
          setValueSpecialized={setValueSpecialized}
        />
        <ListLink
          HandleDelete={HandleDelete}
          listInfo={listInfo}
          openTableLink={openTableLink}
          setLink={setLink}
          setListInfo={setListInfo}
          setValueDate={setValueDate}
          valueDate={valueDate}
          handleAllLink={handleAllLink}
          // handleFilterDate={handleFilterDate}
          handleFilter={handleFilter}
          resListInfo={resListInfo}
        />
      </div>
    </div>
  );
}
export default Cadres;