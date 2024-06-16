import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const [form] = Form.useForm();
  const { Title } = Typography;
  let history = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateValues = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "username is required.";
    }
    if (!values.password) {
      errors.password = "password is required.";
    }
    if (values.password !== values.password2) {
      errors.password2 = "password and password2 doesnot match!";
    }

    console.log("errors", errors);
    setErrors(errors);
    return errors;
  };

  const onFinish = async (values) => {
    validateValues(values);
    if (Object.keys(errors).length > 0) {
      return;
    } else {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      try {
        const response = await axios.post(
          `http://localhost:3000/sign_up`,
          values
        );
        console.log(response);
        toast("Congratulations! Your account has been created successfully.");
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
        setErrors({});
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const redirectToLoginForm = () => {
    history("/login");
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
      <Title>Signup Form</Title>
      <Form.Item
        label="Set Username"
        name="username"
        hasFeedback={!errors.username}
      >
        <Input />
        {errors.username && (
          <Typography.Text type="danger">{errors.username}</Typography.Text>
        )}
      </Form.Item>

      <Form.Item
        label="Set Password"
        name="password"
        hasFeedback={!errors.password}
      >
        <Input.Password />
        {errors.password && (
          <Typography.Text type="danger">{errors.password}</Typography.Text>
        )}
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="password2"
        hasFeedback={!errors.password2}
      >
        <Input.Password />
        {console.log("password2", errors.password2)}
        {errors.password2 && (
          <Typography.Text type="danger">{errors.password2}</Typography.Text>
        )}
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" disabled={loading}>
          {loading ? "Signing..." : "Sign up"}
        </Button>
        <Button type="link" htmlType="button" onClick={redirectToLoginForm}>
          Already have an account?
        </Button>
      </Form.Item>
      <ToastContainer />
    </Form>
  );
};

export default SignupForm;
