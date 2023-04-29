import React, { useContext, useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { name, age, clas, gpa } from './Form';

const UserList = () => {
    const Name = useContext(name)
    const Age = useContext(age)
    const Class = useContext(clas)
    const GPA = useContext(gpa)

    //     const [username, setusername] = useState([]);
    //     const [userage, setuserage] = useState([]);
    //     const [userclass, setuserclass] = useState([]);
    //     const [usergpa, setusergpa] = useState([]);

    //     useEffect(() => {
    //         setusername(Name)
    //         setuserage(Age)
    //       setuserclass(Class)
    //       setusergpa(GPA)
    // })

    const tabledata = [
        {
            UserName: Name,
            UserAge: Age,
            UserClass: Class,
            UserGPA: GPA
        },
        {
            UserName: "Name",
            UserAge: "Age",
            UserClass: "Class",
            UserGPA: "GPA"
        },
    ]
    console.log("tabledata>>>", tabledata);
    const tablecolumns = [
        {
            Header: 'NAME',
            accessor: 'UserName', // accessor is the "key" in the data
        },
        {
            Header: 'AGE',
            accessor: 'UserAge',
        },
        {
            Header: 'CLASS',
            accessor: 'UserClass',
        },
        {
            Header: 'GPA',
            accessor: 'UserGPA',
        },
    ]

    const columns = useMemo(() => tablecolumns, [])
    const data = useMemo(() => tabledata)

    console.log("data>>", data);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns, data,
    })
    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    borderBottom: 'solid 3px red',
                                    background: 'aliceblue',
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                // console.log('cell ', cell);
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            // padding: '5px',
                                            // border: 'solid 1px gray',
                                            background: 'papayawhip',
                                        }}
                                    >
                                        {cell.render("Cell")}
                                        {/* <div>
                                            {cell.render('Cell').map((v) => {
                                                return (
                                                    <>
                                                        <div >

                                                            <h4>{v.Name}</h4>
                                                            <h4>{v.Age}</h4>
                                                            <h4>{v.Class}</h4>
                                                            <h4>{v.GPA}</h4>
                                                        </div>
                                                    </>

                                                )
                                            }
                                            )}
                                        </div> */}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        // {/* <table  {...getTableProps()}>
        //       <thead>
        //         {headerGroups.map(headerGroup => (
        //           <tr {...headerGroup.getHeaderGroupProps()}>
        //             {headerGroup.headers.map(column => (
        //               <th {...column.getHeaderProps()}>{column.render("Header")}</th>
        //             ))}
        //           </tr>
        //         ))}
        //       </thead>
        //       <tbody {...getTableBodyProps()} >
        //         {rows.map((row, i) => {
        //           prepareRow(row);
        //           return (
        //             <tr  {...row.getRowProps()}>
        //               {row.cells.map(cell => {
        //                 return <td  {...cell.getCellProps()}>{cell.render("Cell")}</td>;
        //               })}
        //             </tr>
        //           );
        //         })}
        //       </tbody>
        //     </table> */}

        // Name || Age || Class || GPA ?
        //     <div>

        //         {/* <ul style={{flexDirection: 'column',}}> */}
        //         {Name.map(v => (
        //             <h6 key={Math.random()}>{v}</h6>
        //         ))}
        //         {Age.map(v => (
        //             <h6 key={Math.random()}>{v}</h6>
        //         ))}
        //         {Class.map(v => (
        //             <h6 key={Math.random()}>{v}</h6>
        //         ))}
        //         {GPA.map(v => (
        //             <h6 key={Math.random()}>{v}</h6>
        //         ))}

        //         {/* </ul> */}
        //     </div>
        //     : <h6>No User in List</h6>
    );

}

export default UserList;


