import React, { useEffect, useState } from "react";
import Modal_CTV from '../Collaborator/Modal_CTV/Modal_CTV'
import Table_CTV from '../Collaborator/Table_CTV/Table_CTV'
import Search from "./Search/Search";
import axios from 'axios'
import { Row, Col } from 'reactstrap'
function Collaborator() {
    const [modal, setModal] = useState(false);
    const [check, setCheck] = useState(false)
    const [checkEdit, setCheckEdit] = useState(false);

    const toggle = () => setModal(!modal);
    const [infoCTV, setInfoCTV] = useState({
        _id: '',
        full_name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        roles: '',
        gender: '',

    })

    const [listInfoCTV, setListInfoCTV] = useState([])
    const handleValue = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setInfoCTV({ ...infoCTV, [name]: value })

    }
    useEffect(() => {
        axios.get('http://localhost:8080/api/auth/user/list')
            .then(res => {
                setListInfoCTV(res.data)
            })
            .catch(err => console.log(err))
    }, [checkEdit])

    const handleAdd = () => {
        axios.post('http://localhost:8080/api/auth/user/create', infoCTV)
            .then(res => {
                setInfoCTV({
                    _id: '',
                    full_name: '',
                    email: '',
                    phone: '',
                    username: '',
                    password: '',
                    roles: '',
                    gender: '',
                })
                setCheckEdit(!checkEdit)
                toggle()
            })
            .catch(err => console.log(err))
    }
    const handleDelete = async (id) => {
        // console.log(listInfoCTV[id]._id);
        await axios
            .delete(`http://localhost:8080/api/auth/user/delete/${listInfoCTV[id]._id}`)
            .then((res) => { })
            .catch((err) => console.log(err));
        await axios
            .get('http://localhost:8080/api/auth/user/list')
            .then((res) => {
                setListInfoCTV(res.data);
            })
            .catch((err) => console.log(err));
    };


    const edit = (id) => {

        setInfoCTV({ ...infoCTV, _id: id })
        toggle()
        axios.get(`http://localhost:8080/api/auth/user/edit/${id}`)
            .then(res => {
                setInfoCTV(res.data)

            })
            .catch(err => console.log(err))
        setCheck(true)
    }
    const handleUpdate = () => {
        axios.post(`http://localhost:8080/api/auth/user/update/${infoCTV._id}`, infoCTV)
            .then(res => {
                setInfoCTV({
                    _id: '',
                    full_name: '',
                    email: '',
                    phone: '',
                    username: '',
                    password: '',
                    roles: '',
                    gender: '',
                });
                toggle()
                setCheckEdit(!checkEdit)
                setCheck(false)
            })
            .catch(err => console.log(err))
    }
    const handleClose=()=>{
        setInfoCTV({
            _id: '',
            full_name: '',
            email: '',
            phone: '',
            username: '',
            password: '',
            roles: '',
            gender: '',
        })
        toggle()
    }
    return (
        <>
            <div >

                <h3 style={{ textAlign: 'center', color: 'blue', marginTop: '50px' }}>QUẢN LÝ CỘNG TÁC VIÊN</h3>
                <div style={{ marginTop: '50px' }}>
                    <Row >

                        <Col md={6} style={{ display: 'flex', justifyContent: "left" }} >

                            <Search />
                        </Col>
                        <Col md={6} style={{ display: 'flex', justifyContent: "right" }}>

                            <Modal_CTV toggle={toggle} modal={modal} handleValue={handleValue} handleUpdate={handleUpdate}
                                handleAdd={handleAdd} infoCTV={infoCTV} check={check} handleClose={handleClose}
                            />
                        </Col>

                    </Row>
                </div>

                <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: "50px" }}>

                    <Table_CTV listInfoCTV={listInfoCTV} handleDelete={handleDelete} edit={edit} 
                    
                    />
                </div>
            </div>

        </>
    )
}
export default Collaborator