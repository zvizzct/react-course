import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, TextField, Typography, Link, Alert } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLogInWithEmailPassword
} from '../../store/auth'
import { useMemo } from 'react'

export const LoginPage = () => {
  const dispatch = useDispatch()
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })
  const { status, errorMessage } = useSelector((state) => state.auth)
  const isCheckingAuthentication = useMemo(
    () => status === 'checking',
    [status]
  )
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(startLogInWithEmailPassword({ email, password }))
  }
  const onGoogleSignIn = () => {
    console.log('google signin')
    dispatch(startGoogleSignIn({ email, password }))
  }
  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              name="email"
              value={email}
              onChange={onInputChange}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isCheckingAuthentication}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
                disabled={isCheckingAuthentication}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
