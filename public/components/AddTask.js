import React from 'react'


class Form extends React.Component {

  constructor(props) {
    super(props)
    let formValue = createValue({
      value: props.value,
      onChange: this.onChange.bind(this)
    })
    this.state = {formValue}
  }

  onChange(formValue) {
    this.setState({formValue})
  }

  render() {
    return (
      <Fieldset formValue={this.state.formValue}>
        <Field select="taskName" label="First name" />
        <Field select="lastName" label="Last name" />
      </Fieldset>
    )
  }
}

export default Form
