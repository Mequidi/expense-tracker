import "./ChartBars.css"

const ChartBars = (props) => {

    let chartBarFillpercent = "0%"

    if(props.maxValue > 0)  
        chartBarFillpercent = Math.round((props.value/props.maxValue)*100) + "%";

    return (<div className = "chart-bar">
                <div className = "chart-bar__inner">
                    <div 
                        className = "chart-bar__fill"
                        style = {{height : chartBarFillpercent}}
                    />
                </div>
                <div className = "chart-bar__label">{props.label}</div>
            </div>
    )

};

export default ChartBars