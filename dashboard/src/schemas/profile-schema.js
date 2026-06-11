import * as Yup from 'yup'

export const ProfileSchema = Yup.object({
    firstname: Yup.string()
        .transform((value) => value?.trim())
        .min(3, "First name must be at least 3 characters")
        .required("Please Enter your first name"),
    lastname: Yup.string()
        .transform((value) => value?.trim())
        .min(3, "Last name must be at least 3 characters")
        .required("Please Enter your last name"),
    email: Yup.string()
        .transform((value) => value?.trim())
        .email("Please enter a valid email")
        .required("Please Enter your email"),
    profilePicture: Yup.string(),
})
