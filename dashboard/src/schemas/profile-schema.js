import * as Yup from 'yup'


export const ProfileSchema = Yup.object({
    firstname: Yup.string().min(3).required("Please Enter your first name"),
    lastname: Yup.string().min(3).required("Please Enter your last name"),
    email: Yup.string().email("Please enter a valid email").required("Please Enter your email"),
    telephone: Yup.number().min(9).required("Please Enter your phone number"),   
    password: Yup.string().min(5).required("Please Enter your password"),
    cpassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Please consfirm the password")
})

