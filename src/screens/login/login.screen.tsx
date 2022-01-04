import { Container, Grid } from "@mui/material";
import Form from "./components/form/form.components";
import { Logo, Wrapper } from "./login.styled";
import logo from '../../assets/icons/logo.svg'

export default function Login() {
    return(
        <>
            <Container>
                <Wrapper container justifyContent={'center'}>
                    <Grid item xs={3} justifyContent={'center'}>
                        <Grid container justifyContent={'center'}>
                            <Logo src={logo} alt={'Netflix Logo'} />
                            <Form/>
                        </Grid>
                    </Grid>
                </Wrapper>
            </Container>
        </>
    )
}