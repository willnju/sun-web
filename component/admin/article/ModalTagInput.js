import React from 'react'
import {Tag, Input, Tooltip, Icon, Modal} from 'antd';
import './index.scss'

class ModalTagInput extends React.Component {
    state = {
        inputVisible: false,
        inputValue: '',
    };
    componentDidMount() {
        console.log("this.props.tags",this.props.tags)
        // this.setState({
        //     tags: this.props.tags?this.props.tags:[],
        // })
    }
    handleCancel = () => {
        this.setState({
            inputVisible: false,
        });
    }
    handleClose = (removedTag) => {
        const tags = this.props.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.props.handleChangeTag(tags);
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = this.props.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            inputVisible: false,
            inputValue: '',
        });
        this.props.handleChangeTag(tags);
    }

    saveInputRef = input => this.input = input

    render() {
        const {inputVisible, inputValue } = this.state;
        const {tags}=this.props;
        return (
            <div>
                {tags.map((tag, index) => {
                    const isLongTag = tag.length > 20;
                    const tagElem = (
                        <Tag
                            // style={{width:120,height:80,}}
                            key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)} color="green">
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </Tag>
                    );
                    return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                })}
                <Modal
                    title="新增标签"
                    visible={inputVisible}
                    onOk={this.handleInputConfirm.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 80 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                    />
                </Modal>
                {!inputVisible && (
                    <Tag
                        onClick={this.showInput}
                        style={{
                            // width:120,height:80,
                            background: '#fff', borderStyle: 'dashed'}}
                    >
                        <Icon type="plus" />
                    </Tag>
                )}
            </div>
        );
    }
}


export default ModalTagInput;
