import * as React from 'react';
import MUIDataTable from "mui-datatables";
import Layout from '../../components/layout';
import { connect } from 'react-redux';
import { fetchFlights } from '../../redux/actions';
import Button from '@mui/material/Button';
import CustomizedDialogs from '../../components/dialog';
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
            props.fetchFlights({});
        }
    }, [props.flightAdded]);



    React.useEffect(() => {
        setData(props.flightData.data)
    }, [props.flightData]);


    return (
        <Layout title={'Flights'}>
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
    flightAdded: (state.demoReducer && state.demoReducer.flightAdded) ? state.demoReducer.flightAdded : null
});

const mapDispatchToProps = (dispatch) => ({
    fetchFlights: (filter) => dispatch(fetchFlights(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Flight);

