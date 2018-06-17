import React from 'react'
import {Select} from "antd";

const Option = Select.Option;

class ChannelSelector extends React.Component {
    constructor(props){
        super(props);
        this.state={
            channel:"",
            column:""
        }
    }
    componentDidMount() {
        console.log("componentDidMount")
       this.props.initChannels()
    }
    handleChangeChannel = (value) => {
        this.setState({
            channel:value,
            column:"",
            // secondCity: cityData[value][0],
        });

        console.log("channel value",value)
        this.props.initColumns(value);
    }
    handleChangeColumn =(value)=>{
        this.setState({
            column:value,
        });
        let cc={
            channel:this.state.channel,
            column:this.state.column,
        }
        this.props.handleChangeChannleAndColumn(cc)
    }
    render() {
        const {channels,columns}=this.props;
        let cls=channels?channels:[]
        console.log("cls",cls);
        const channelOptions = cls.map(channel => <Option key={channel.channelUri}>{channel.channelNameCn}</Option>);
        console.log(channelOptions);
        let cos=columns?columns:[];
        console.log("cos",cos);
        const columnOptions = cos.map(column => <Option key={column.columnUri}>{column.columnNameCn}</Option>);
        return (
            <div>
                <Select defaultValue="" style={{ width: 90 }} onChange={this.handleChangeChannel}>
                    {channelOptions}
                </Select>
                <Select value={this.state.column} style={{ width: 90 }} onChange={this.handleChangeColumn.bind(this)}>
                    {columnOptions}
                </Select>
            </div>
        );
    }
}

export default ChannelSelector;
