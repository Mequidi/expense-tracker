import "./Chart.css"
import ChartBars from "./ChartBars";

const Chart = (props) =>{

    const datapointValues = props.datapoints.map(datapoint => datapoint.value)
    const totalMaximum = Math.max(...datapointValues);

    return (<div className = "chart">
        {props.datapoints.map(datapoint=>
            (<ChartBars 
                key = {datapoint.label}
                value = {datapoint.value}
                label = {datapoint.label}
                maxValue = {totalMaximum}
            ></ChartBars>
        ))}
        </div>
    );
};

export default Chart