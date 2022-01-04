import { useSelector } from "react-redux";
import {State} from "../../../store/store/store.types"
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { LoginPath } from "../../../screens/login/login.types";

export default function UserGuard({children}: any) {
    const isUserAuthenticated = useSelector((state: State) => !!state.user.data)
    const isCheckout = false
    const navigate = useNavigate()
    const from = useLocation()

    useEffect(
        () => {
            if (!isUserAuthenticated) {
                navigate(LoginPath,{
                    state: {from}
                })
            } 
        },
        [isUserAuthenticated]
    )

    if (isUserAuthenticated) return children

    return <></>
    
}