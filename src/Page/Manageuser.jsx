import React, { useState } from 'react';
import { useSidebar } from '../Component/sidebarcontext';
import MUIDataTable from "mui-datatables";
import './manageuser.css';
import Swal from 'sweetalert2';

function Manageuser() {



    const columns = [
        { id: 'Profile', label: 'Profile', options: {
            sort: false, // Disables sorting for this column
          },},
        { id: 'CardID', label: 'CardID', options: {
            sort: false, // Disables sorting for this column
          },},
        { id: 'Sex', label: 'Sex', options: {
            sort: false, // Disables sorting for this column
          },},
        { id: 'Role', label: 'Role', options: {
            sort: false, // Disables sorting for this column
          },},
        { id: 'Action', label: 'Action', options: {
            sort: false, // Disables sorting for this column
          },},
    ];


    const [responsive, setResponsive] = useState('standard');


    // const columns = ["CardID","Picture","Name", "Sex", "Role","Action"];

    const suretodelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }

    const [data1, setdata1] = useState([[<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
        <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", <div className="sexintable male">Male</div>, "Patient", <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can" onClick={suretodelete}></i>
        </div>],
    [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
    <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", <div className="sexintable female">Female</div>, "Patient", <div className="iconintable">
    <i className="fa-solid fa-id-card-clip"></i>
    <i className="fa-solid fa-pen-to-square"></i>
    <i className="fa-solid fa-trash-can"></i>
    </div>],
    [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
    <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", <div className="sexintable male">Male</div>, "Patient", <div className="iconintable">
    <i className="fa-solid fa-id-card-clip"></i>
    <i className="fa-solid fa-pen-to-square"></i>
    <i className="fa-solid fa-trash-can"></i>
    </div>],
    [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
    <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", <div className="sexintable male">Male</div>, "Patient", <div className="iconintable">
    <i className="fa-solid fa-id-card-clip"></i>
    <i className="fa-solid fa-pen-to-square"></i>
    <i className="fa-solid fa-trash-can"></i>
    </div>]
    ,[
        <div className='imgintable'>
            <img src="../../UserProfile/rashford.jpg" alt="" />
            <div className='profiletext'>
            <p>Rashford</p>
            <p>012-345-6789</p>
            </div>
        </div>, "1234567891011", 
        <div className="sexintable female">Female</div>, "Patient", 
        <div className="iconintable">
            <i className="fa-solid fa-id-card-clip"></i>
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash-can"></i>
        </div>
    ],
    [<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
    <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", "Yonkers", "Patient", <div className="iconintable">
    <i className="fa-solid fa-id-card-clip"></i>
    <i className="fa-solid fa-pen-to-square"></i>
    <i className="fa-solid fa-trash-can"></i>
    </div>],[<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
    <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", "Yonkers", "Patient", <div className="iconintable">
    <i className="fa-solid fa-id-card-clip"></i>
    <i className="fa-solid fa-pen-to-square"></i>
    <i className="fa-solid fa-trash-can"></i>
    </div>],[<div className='imgintable'><img src="../../UserProfile/rashford.jpg" alt="" /><div className='profiletext'>
    <p>Rashford</p><p>012-345-6789</p></div></div>, "1234567891011", "Yonkers", "Patient", <div className="iconintable">
    <i className="fa-solid fa-id-card-clip"></i>
    <i className="fa-solid fa-pen-to-square"></i>
    <i className="fa-solid fa-trash-can"></i>
    </div>]
    ]);

    const newData = data1.map(row => [...row, <div className="iconintable">
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash-can"></i>
    </div>]);



    const test = () => {
        setdata1([["Joe James", "Test Corp", "Yonkers", "NY"],
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["Joe James", "Test Corp", "Yonkers", "NY"],]);
        console.log(newData)
    }

    const test2 = () => {
        setdata1([["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],])
    }


    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];


    const options = {

        selectableRows: false,
        elevation: 0,
        responsive,
        search: false,
        download: false,
        print: false,
        viewColumns: false,
        filter: false,
        textTransform: 'none',
        pagination: true, // Enable pagination
        rowsPerPage: 5, // Set number of rows per page
        rowsPerPageOptions: [5, 10, 15],

    };



    const { isSidebarOpen } = useSidebar();
    const mainClass = `Main${isSidebarOpen ? ' sidebarOpen' : ''}`;
    return (
        <>
            <div className={mainClass}>
                <div className="main-content">
                    <div className="head-title">
                        <div className="left">
                            <h1>Manage User</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li><i className="fa-solid fa-angle-right"></i></li>
                                <li>
                                    <a className="active" href="#">Manage User</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="functable">
                    <div className="btnadduser">
                        <input type="submit" value="+ New User"/>
                    </div>
                    <div className="searchboxandropdown">
                        <div className="searchbox">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input className="search-input" type="search" placeholder="Search..."/>
                        </div>
                        <div className="dropdown">
                            <label for="role">Role : </label>
                            <select name="role" id="role">
                                <option value="All">All</option>
                                <option value="Patient">Patient</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* <button onClick={test}>kuy</button>
                <button onClick={test2}>kuy1</button>
                <input type="text" onChange={test} /> */}

                <div className="my-table" style={{ marginTop: "30px" }}>
                    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <MUIDataTable
                            data={newData}
                            columns={columns}
                            options={options}
                        />
                    </div>

                </div>


            </div>
        </>
    )
}

export default Manageuser