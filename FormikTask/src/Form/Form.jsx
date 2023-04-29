//import liraries
import { useFormik } from 'formik';
import React, { useEffect, createContext, useState } from 'react';
import { formschema } from '../Schemas';
import UserList from './UserList';

const name = createContext()
const age = createContext()
const clas = createContext()
const gpa = createContext()
// create a component
const Form = () => {
    
    const [f_name, setf_name] = useState([])
    const [f_age, setf_age] = useState([])
    const [f_class, setf_class] = useState([])
    const [f_gpa, setf_gpa] = useState([])

    // const [formInputData, setformInputData] = useState(
    //     {
    //         Name: '',
    //         Age: '',
    //         Class: '',
    //         GPA: ''
    //     }
    // );

    const initialValues = {
        Name: '',
        Age: '',
        Class: '',
        GPA: '',

    }
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues,
        // validationSchema: formschema,
        onSubmit: (values, action) => {

            action.resetForm()
            const newData = (data) => ([...data, values.Name])
            setf_name(newData);

            setf_age((prev) => {
                return [...prev, values.Age]
            })
            setf_class((prev) => {
                return [...prev, values.Class]
            })
            setf_gpa((prev) => {
                return [...prev, values.GPA]
            })
        }
    })



    return (
        <div className='main_div'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-block">
                        <label htmlFor="Name" className="input-label">
                            Name
                        </label>
                        <input
                            type="name"
                            autoComplete="off"
                            name="Name"
                            id="Name"
                            placeholder="Name"
                            value={values.Name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.Name && touched.Name ? (
                            <p className="form-error">{errors.Name}</p>
                        ) : null}
                    </div>
                    <div className="input-block">
                        <label htmlFor="Age" className="input-label">
                            Age
                        </label>
                        <input
                            type="name"
                            autoComplete="off"
                            name="Age"
                            id="Age"
                            placeholder="Age"
                            value={values.Age}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.Age && touched.Age ? (
                            <p className="form-error">{errors.Age}</p>
                        ) : null}
                    </div>
                    <div className="input-block">
                        <label htmlFor="Class" className="input-label">
                            Class
                        </label>
                        <input
                            type="name"
                            autoComplete="off"
                            name="Class"
                            id="Class"
                            placeholder="Class"
                            value={values.Class}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.Class && touched.Class ? (
                            <p className="form-error">{errors.Class}</p>
                        ) : null}
                    </div>
                    <div className="input-block">
                        <label htmlFor="GPA" className="input-label">
                            GPA
                        </label>
                        <input
                            type="number"
                            step="0.1"
                            min='2.0'
                            max='4'
                            autoComplete="off"
                            name="GPA"
                            id="GPA"
                            placeholder="GPA"
                            value={values.GPA}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.GPA && touched.GPA ? (
                            <p className="form-error">{errors.GPA}</p>
                        ) : null}
                    </div>
                    <div className="modal-buttons">
                        <button className="input-button" type="submit">
                            Registration
                        </button>
                    </div>
                </form>
            </div>

            {/* <div>
                {f_name.map((v)=>{
                    return(
                        <>
                        <div style={{display: 'flex',}}>

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
            <div>
                <name.Provider value={f_name}>
                    <age.Provider value={f_age}>
                        <clas.Provider value={f_class}>
                            <gpa.Provider value={f_gpa}>
                                <UserList />
                            </gpa.Provider>
                        </clas.Provider>
                    </age.Provider>
                </name.Provider>

            </div>
        </div>
    );
};



//make this component available to the app
export default Form;
export { name, age, clas, gpa };