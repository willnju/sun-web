import React from "react";
import {Axis, Chart, Geom} from "bizcharts";
import {Tooltip} from "antd";

class Charts extends React.Component {
    render() {
        const data = [];
        return (
            <div>
                <Chart height={400} data={data} scale={cols} forceFit>
                    <Axis name="year" />
                    <Axis name="value" />
                    <Tooltip crosshairs={{type : "y"}}/>
                    <Geom type="line" position="year*value" size={2} />
                    <Geom type='point' position="year*value" size={4} shape={'circle'} style={{ stroke: '#fff', lineWidth: 1}} />
                </Chart>
            </div>
        )
    }
}

export default Charts;
