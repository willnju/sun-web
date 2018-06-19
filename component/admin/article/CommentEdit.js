import React from 'react'
import {Avatar, Button, Form, Icon, Input} from "antd";

const FormItem = Form.Item;
const { TextArea } = Input;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class CommentEdit extends React.Component {
    constructor(props){
        super(props);
        this.state={
            displaySubmit:"none",
        }
    }
    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmitComment(values.comment);
            }
        });
    }
    focusComment(){
        console.log("focusComment")
        this.setState({
            displaySubmit:"block",
        })
    }
    cancelComment(){
        console.log("cancel Comment")
        this.setState({
            displaySubmit:"none",
        })
    }
    render() {
        const {getFieldDecorator,  isFieldTouched} = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        return (
            <Form layout="block" onSubmit={this.handleSubmit}>
                <Avatar>孟</Avatar>
                <FormItem
                    help={userNameError || ''}
                >
                    {getFieldDecorator('comment', {
                        rules: [{required: true, message: 'Please input your comment!'}],
                    })(
                        <TextArea  prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username" onFocus={this.focusComment.bind(this)} />
                    )}
                </FormItem>

                <FormItem>
                    <div style={{display: this.state.displaySubmit}}>
                        <Button onClick={this.cancelComment.bind(this)}
                        >取消</Button>
                        <Button type="primary"
                                htmlType="submit"
                        >评论</Button>
                    </div>
                </FormItem>
            </Form>
        );
    }
}

const CommentEditForm = Form.create()(CommentEdit);
export default CommentEditForm;
