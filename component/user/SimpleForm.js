import React from 'react'
import { Field, reduxForm } from 'redux-form'
const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="input-group-addon">学号</span>
          <Field
            name="userNo"
            component="input"
            type="text"
            placeholder="学号"
            className="form-control"
          />
        </div>
        <div className="input-group">
          <span className="input-group-addon">姓名</span>
          <Field
            name="userName"
            component="input"
            type="text"
            placeholder="姓名"
            className="form-control"
          />
        </div>
        <div className="input-group">
          <span className="input-group-addon">Email</span>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="email"
            className="form-control"
          />
        </div>
        <div className="input-group">
          <span className="input-group-addon">职称</span>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="职称"
            className="form-control"
          />
        </div>

      <div className="m-t-15 form-group">
        <button type="submit" className="btn btn-success waves-effect waves-light m-r-10" disabled={pristine || submitting}>Submit</button>
        <button type="button" className="btn btn-danger waves-effect waves-light" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm)
