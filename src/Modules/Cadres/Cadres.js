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
  const user = JSON.parse(localStorage.getItem("user"));
  const roles = user ? user.roles.toString() : "";
  // console.log(link);
  // console.log(listInfo);
  // console.log(roles);

  const [resListInfo, setResListInfo] = useState([]);
  const onChangeLink = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLink({ ...link, [name]: value });
  };
  const handleButtonMore = () => {
    const valueFB = document.getElementById("More__Link__FB").value;
    // if(roles === "CTV"){
    //     setLink({ ...link, NameCTV : user.full_name})
    // console.log(link.NameCTV);
    //     console.log("yess");
    // }else{
    //   console.log("khong phair");
    // }
    setLink({...link, NameCTV : user.full_name});
    // roles === "CTV" ? setLink({...link, NameCTV : user.full_name}) : link.NameCTV ;
    if (
      valueFB === "" ||
      // link.NameCTV === "" ||
      link.Department === "" ||
      link.Specialized === ""
    ) {
      alert("Vui lòng nhập đủ thông tin");
    } else if (listInfo.filter((item) => item.linkfb.includes(link.linkfb)) === [] ) {
      setLink({ NameCTV: "", Department: "", Specialized: "", linkfb: "" });
      return alert("Facebook đã tồn tại");
    } else {
      axios
        .post("http://localhost:8080/api/customer/create", link)
        .then((res) => {
          setListInfo([...listInfo, link]);
          setLink({ NameCTV: "", Department: "", Specialized: "", linkfb: "" });
        })
        .catch((err) => console.log(err));
    }
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
    // console.log(listInfo[id]._id);
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
          listInfo={listInfo}
          // filterResult={filterResult}
        />
        <ListLink
          link={link}
          // setListInfo={setListInfo}
          resListInfo={resListInfo}
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
