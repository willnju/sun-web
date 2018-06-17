import React from 'react'
import {Tag, Input, Tooltip, Icon, Modal} from 'antd';
import './index.scss'

class ModalTagInput extends React.Component {
    state = {
        tags: [],
        inputVisible: false,
        inputValue: '',
    };

    handleOk = (tags) => {
        console.log(tags);
    }
    handleCancel = (tags) => {
        console.log(tags);
        this.setState({
            inputVisible: false,
        });
    }
    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
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
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
        this.props.handleChangeTag(tags);
    }

    saveInputRef = input => this.input = input

    render() {
        const { tags, inputVisible, inputValue } = this.state;
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
                    title="Basic Modal"
                    visible={inputVisible}
                    onOk={this.handleInputConfirm.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
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
