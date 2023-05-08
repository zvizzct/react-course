import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks'

const formData = {
  email: 'victor@gmail.com',
  password: '123456',
  displayName: 'Victor'
}

const formValidations = {
  email: [(value = '') => value.includes('@'), 'Invalid email address'],
  password: [
    (value = '') => value.length > 5,
    'Password must be at least 6 characters'
  ],
  displayName: [
    (value = '') => value.length > 2,
    'Display name must be at least 3 characters'
  ]
}

export const RegisterPage = () => {
  const dispatch = useDispatch()
  const [formSubmited, setFormSubmited] = useState(false)
  const { status, errorMessage } = useSelector((state) => state.auth)
  const isCheckingAuthentication = useMemo(
    () => status === 'checking',
    [status]
  )
  console.log(errorMessage)
  const {
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid
  } = useForm(formData, formValidations)
  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmited(true)
    if (!isFormValid) return
    dispatch(
      startCreatingUserWithEmailAndPassword({ email, password, displayName })
    )
  }
  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="John Smith"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            {errorMessage && (
              <Grid item xs={12} sm={612}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            )}
            <Grid item xs={12} sm={612}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth
              >
                Register
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}> Already have an account? </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Login here!
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
