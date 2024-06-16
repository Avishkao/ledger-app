import React from "react";
import { Button, Form, Input, Typography } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const [form] = Form.useForm();
  const { Title } = Typography;
  const onFinish = async (values) => {
    console.log("Success:", values);
    await axios
      .post(`http://localhost:3000/login`, values)
      .then((response) => {
        console.log(response);
        toast("Login successful! ");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Incorrect username or password. Please try again.");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const layout = {
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <Form
      {...layout}
      style={{
        maxWidth: 600,
        border: "1px solid grey",
        borderRadius: 20,
        padding: 20,
        margin: "20px auto",
      }}
      initialValues={{
        remember: true,
        username: "",
        password: "",
      }}
      name="control-hooks"
      onFinish={onFinish}
      form={form}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title>Login Form</Title>
      <Form.Item
        label="Username"
        name="username"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      <ToastContainer />
    </Form>
  );
};

export default SignupForm;
