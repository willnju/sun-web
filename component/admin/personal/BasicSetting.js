import React from 'react';
import {AutoComplete, Button, Form, Icon, Input, Radio,  Select, Tooltip} from 'antd';
import UploadAvatar from "../user/UploadAvatar";
import './index.scss'
import './gallery.scss'

import Gallery from "../../common/Gallery";

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;

const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

class BasicSetting extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // this.props.handleAction(values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        // const {user}=this.props;
        let user = {
            email: "mengfansai147@163.com",
            userNo: "MG1514018",
            userName: "孟凡赛",
        }
        const {autoCompleteResult} = this.state;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <div className="settings-basic">
                <Gallery/>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="avatar">
                    <UploadAvatar style={{display: "block",cursor:"pointer"}}/>
                    </div>
                    <FormItem
                        {...formItemLayout}
                        label="邮箱"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                                required: false, message: 'Please input your E-mail!',
                            }],
                            initialValue: user ? user.email : "",
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
              学号&nbsp;
                                <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
                        )}
                    >
                        {getFieldDecorator('userNo', {
                            rules: [{required: false, message: 'Please input your userno!', whitespace: true}],
                            initialValue: user ? user.userNo : "",
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
              姓名&nbsp;
                                <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
                        )}
                    >
                        {getFieldDecorator('userName', {
                            rules: [{required: false, message: 'Please input your name!', whitespace: true}],
                            initialValue: user ? user.userName : "",
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
              性別&nbsp;
                                {/*<Tooltip title="What do you want others to call you?">*/}
                {/*<Icon type="question-circle-o"/>*/}
              {/*</Tooltip>*/}
            </span>
                        )}
                    >
                        {getFieldDecorator('sex', {
                            rules: [{required: false, message: 'Please input your title!', whitespace: true}],
                        })(
                            <RadioGroup
                                // onChange={this.onChange} value={this.state.value}
                            >
                                <Radio value="1">男</Radio>
                                <Radio value="2">女</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
              学位&nbsp;
                                {/*<Tooltip title="What do you want others to call you?">*/}
                {/*<Icon type="question-circle-o"/>*/}
              {/*</Tooltip>*/}
            </span>
                        )}
                    >
                        {getFieldDecorator('title', {
                            rules: [{required: false, message: 'Please input your title!', whitespace: true}],
                        })(
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                // onChange={handleChange}
                                // onFocus={handleFocus}
                                // onBlur={handleBlur}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="jack">博士</Option>
                                <Option value="lucy">硕士</Option>
                                <Option value="tom">学士</Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedBasicSetting = Form.create()(BasicSetting);
export default WrappedBasicSetting;