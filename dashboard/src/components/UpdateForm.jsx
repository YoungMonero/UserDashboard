import  { useState } from "react"
import { useNavigate } from "react-router"

import ProfileForm from "./ProfileForm"
import { useUser } from "../context/user-context"

export default function UpdateForm() {
 
 const {user, setUser} = useUser()

  const navigate = useNavigate()

  const onSubmit =  (values) => {
    setUser(values);
  navigate("/display");
  }

  return <ProfileForm initialValues={user} title="Update your info" onSubmit={onSubmit} />
}
