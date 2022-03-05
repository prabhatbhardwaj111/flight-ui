import * as React from 'react';
import MUIDataTable from "mui-datatables";
import Layout from '../../components/layout';
import { connect } from 'react-redux';
import { fetchFlights } from '../../redux/actions';
import Button from '@mui/material/Button';
import CustomizedDialogs from '../../components/dialog';
import Alert from '@mui/material/Alert';

const Flight = (props) => {
    const columns = ["from", "to", "departureTime", "landingTime", "price"];
    const [count, setCount] = React.useState(0);
    const [data, setData] = React.useState([]);

    const options = {
        filterType: 'checkbox',
    };



    React.useEffect(() => {
        if (count == 0) {
            props.fetchFlights({});
            setCount(count + 1);
        }
    });

    React.useEffect(() => {
        if (props.flightAdded && props.flightAdded.data) {
            data.push(props.flightAdded.data);
            setData(data);
        }
    }, [props.flightAdded]);



    React.useEffect(() => {
        setData(props.flightData.data)
    }, [props.flightData]);


    return (
        <Layout title={'Flights'}>
            {(props.message) ?
                <Alert severity={(props.message.status == 200 || props.message.status == 201) ? 'success' : 'error'}>{props.message.message}</Alert>
                : ''
            }
            <div>
                <CustomizedDialogs />
                <MUIDataTable
                    title={"Flight List"}
                    data={data}
                    columns={columns}
                    options={options}
                /></div>
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    flightData: (state.demoReducer && state.demoReducer.flightData) ? state.demoReducer.flightData : [],
    flightAdded: (state.demoReducer && state.demoReducer.flightAdded) ? state.demoReducer.flightAdded : null,
    message: (state.demoReducer && state.demoReducer.message) ? state.demoReducer.message : null
});

const mapDispatchToProps = (dispatch) => ({
    fetchFlights: (filter) => dispatch(fetchFlights(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Flight);

