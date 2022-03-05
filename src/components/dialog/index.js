import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import { addFlights } from '../../redux/actions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const CustomizedDialogs = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
};



const handleSubmit = () => {

    props.addFlights(
        {
            "from": from,
            "to": to,
            "departureTime": departureTime,
            "landingTime": landingTime,
            "price": price
        }
    )
    setOpen(false);
};


const [from, setFrom] = React.useState('');
const [to, setTo] = React.useState('');
const [departureTime, setDepartureTime] = React.useState('');
const [landingTime, setLandingTime] = React.useState('');
const [price, setPrice] = React.useState('');

return (
    <div>
        <Button variant="contained" onClick={handleClickOpen}>
            Add New Flight
        </Button>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                Add Flight
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                ><div>
                        <TextField
                            required
                            id="outlined-required"
                            label="From"
                            onChange={(e) => setFrom(e.target.value)}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="To"
                            onChange={(e) => setTo(e.target.value)}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="departureTime"
                            onChange={(e) => setDepartureTime(e.target.value)}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="landingTime"
                            onChange={(e) => setLandingTime(e.target.value)}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="price"
                            onChange={(e) => setPrice(e.target.value)}
                        />

                    </div>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleSubmit}>
                    Save changes
                </Button>
            </DialogActions>
        </BootstrapDialog>
    </div>
);
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    addFlights: (filter) => dispatch(addFlights(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedDialogs);