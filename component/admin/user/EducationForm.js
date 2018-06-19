import React from 'react';
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete} from 'antd';
import UploadAvatar from "./UploadAvatar";
import DateSelect from "../../common/DateSelect";

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.handleSubmit(values);
            }
        });
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        const {education}=this.props;
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
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormItem
                    {...formItemLayout}
                    label="学校"
                >
                    {getFieldDecorator('school', {
                        rules: [ {
                            required: false, message: 'Please input your school name',
                        }],
                        initialValue:education?education.schoolName:"",
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
             专业
            </span>
                    )}
                >
                    {getFieldDecorator('major ', {
                        rules: [{required: false, message: 'Please input your major!', whitespace: true}],
                        initialValue:education?education.major:"",
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
             学位
            </span>
                    )}
                >
                    {getFieldDecorator('degree ', {
                        rules: [{required: false, message: 'Please input your degree!', whitespace: true}],
                        initialValue:education?education.degree:"",
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
             时间;
            </span>
                    )}
                >
                    {getFieldDecorator('date ', {
                        rules: [{required: false, message: 'Please input your date!', whitespace: true}],
                        initialValue:education?education.degree:"",
                    })(
                    <DateSelect/>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm;