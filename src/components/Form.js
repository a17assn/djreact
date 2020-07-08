import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

const FormItem = Form.Item;


class CustomForm extends React.Component {

  handleFormSubmit = async (event , requestType , articleID) => {
    event.preventDefault();

    const postObj = {
      title: event.target.elements.title.value,
      content: event.target.elements.content.value
    }

  
    if (requestType === "post") {
      await axios.post("http://127.0.0.1:8001/api/create/", postObj)
        .then(res => console.log(res))
        .catch(error => console.err(error));
    } else if (requestType === "put") {
      await axios.put(`http://127.0.0.1:8000/api/${articleID}/update/`, postObj)
      .then(res => console.log(res))
      .catch(error => console.err(error));
    }

    
  } 

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <FormItem label="Title">
            <Input name="title" placeholder="Put a title here" />
          </FormItem>
          <FormItem label="Content">
            <Input name="content" placeholder="Enter some content ..." />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}



export default CustomForm;