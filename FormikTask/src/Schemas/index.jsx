import * as  Yup from "yup"

export const formschema = Yup.object({
    Name:Yup.string().min(2).max(20).required("Enter your Name"),
    Age:Yup.number().min(2).required("Enter your Age"),
    Class:Yup.string().required("Enter your Class"),
    GPA:Yup.number().min(2.0).max(4.0).required("Enter your GPA"),
})