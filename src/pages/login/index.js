import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { connect } from 'react-redux';
import { tryLogin } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

const theme = createTheme();

const SignIn = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('admin');
  const [password, setPassword] = React.useState('123456');

  const handleSubmit = () => {
    props.login({
      username: username,
      password: password,
    });
  };

  React.useEffect(() => {


    if (props.loginData && props.loginData.access_token) {
      navigate('/flights')
    }
  }, [props.loginData])



  


  console.log('==', props.message);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {(props.message) ?
            <Alert severity={(props.message.status == 200 || props.message.status == 201) ? 'success' : 'error'}>{props.message.message}</Alert>
            : ''
          }

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={(event) => setUsername(event.target.value)}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              onChange={(event) => setPassword(event.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />

            <Button
              onClick={handleSubmit}
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  loginData: (state.demoReducer && state.demoReducer.loginData) ? state.demoReducer.loginData : {},
  message: (state.demoReducer && state.demoReducer.message) ? state.demoReducer.message : null
});
const mapDispatchToProps = (dispatch) => ({
  login: (filter) => dispatch(tryLogin(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);