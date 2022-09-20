import React, {useEffect, useState} from "react";
import Modal_CTV from '../Collaborator/Modal_CTV/Modal_CTV'
import Table_CTV from '../Collaborator/Table_CTV/Table_CTV'
import Search from "./Search/Search";
import axios from 'axios'
import {Row,Col} from 'reactstrap'
function Collaborator() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [infoCTV, setInfoCTV] = useState({
       _id:'',
        full_name:'',
        email:'',
        phone:'',
        username:'', 
        password:'',
        roles:'',
        gender:'',

    })
    const [listInfoCTV, setListInfoCTV] = useState([])
    const handleValue=(e)=>{
        const name = e.target.name;
        const value = e.target.value
        setInfoCTV({... infoCTV, [name]: value})
        // console.log(infoCTV);
    }
    useEffect(() => {
        axios.get('http://localhost:8080/api/auth/user/list')
            .then(res => {
                setListInfoCTV(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    // console.log(listInfoCTV);
    const handleAdd=()=>{
        axios.post('http://localhost:8080/api/auth/user/create', infoCTV)
        .then(res=>{
            setInfoCTV({
                _id: '',
                full_name:'',
                email:'',
                phone:'',
                username:'', 
                password:'',
                roles:'',
                gender:'',
            })  
            setListInfoCTV([infoCTV, ...listInfoCTV]);
            toggle()
        })
        .catch(err => console.log(err))
    }
    const handleDelete = async (id) => {
        // console.log(listInfoCTV[id]._id);
        await axios
          .delete(`http://localhost:8080/api/auth/user/delete/${listInfoCTV[id]._id}`)
          .then((res) => {})
          .catch((err) => console.log(err));
        await axios
          .get('http://localhost:8080/api/auth/user/list')
          .then((res) => {
            setListInfoCTV(res.data);
          })
          .catch((err) => console.log(err));
      };
      const [check, setCheck] = useState(false) 
    return (
        <>
            <div >

                <h3 style={{ textAlign: 'center', color: 'blue', marginTop: '50px' }}>QUẢN LÝ CỘNG TÁC VIÊN</h3>
                <div style={{marginTop:'50px'}}>
                    <Row >
                        
                        <Col md={6} style={{display:'flex', justifyContent:"left"}} >

                            <Search />
                        </Col>
                        <Col md={6} style={{display:'flex', justifyContent:"right"}}>

                            <Modal_CTV toggle={toggle} modal={modal} handleValue={handleValue} 
                            handleAdd={handleAdd} infoCTV={infoCTV} check={check}
                            />
                        </Col>

                    </Row>
                </div>
               
                <div style={{ marginLeft: '30px', marginRight: '30px' , marginTop:"50px"}}>

                    <Table_CTV  listInfoCTV={listInfoCTV} handleDelete={handleDelete} />
                </div>
            </div>

        </>
    )
}
export default Collaborator