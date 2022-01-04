import { useCallback, useEffect, useState } from 'react';
import Button from '../../../../components/buttons/button/button.component'
import InputText from "../../../../components/inputs/input-text/input-text.component";
import * as yup from 'yup'
import { ErrorMessage } from './form.types';
import { ErrorDiscription } from './form.style';
import { HomePath } from '../../../home/home.types';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {isAuthenticated} from '../../../../store/user/user.selectors'

const errorInitial = ''

export default function Form() {

    const [data, setData] = useState({ email: '', password: ''})
    const [error, setError] = useState(errorInitial)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const isUserAuthenticated = useSelector(isAuthenticated)


    useEffect(
        () => {
            if(isUserAuthenticated) {
                const to = location.state?.from?.pathname || HomePath
                navigate(to)
            }
        },
        [isUserAuthenticated]
    )

    const handleChange = useCallback(
        (event: any) => setData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        })),
        [setData]
    )


    const resetError = useCallback(
        () => setError(errorInitial),
        []
    )
    
    const validation = useCallback(
        async () => {
            const schema = yup.object().shape({
                email: yup.string().required(ErrorMessage.Required).email(ErrorMessage.EmailBadFormat),
                password: yup.string().required(ErrorMessage.Required)
            })
            try {
                await schema.validate(data)
                resetError()
                return true
            } catch(error) {
                // @ts-ignore
                setError(error.errors[0])
                return false
            }

        },
        [data, setError]
    )

    const onSubmit = useCallback(
        async () => {
            await validation()
        },
        [validation]
    )

    return(
        <>
            <InputText type={'text'} placeholder={'E-mail'} onChange={handleChange} />
            <InputText type={'password'} placeholder={'Senha'} onChange={handleChange} />
            <ErrorDiscription>{error}</ErrorDiscription>
            <Button primary={true} onClick={onSubmit}>Entrar</Button>
        </>
    )
}