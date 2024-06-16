import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/signup.css";

const SignupForm = () => {
  const [form] = Form.useForm();
  const { Title } = Typography;
  let history = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});

  const validateLengthofPassword = (values) => {
    if (values.password) {
      if (values.password.length < 6) errors.password = "weak";
      else if (values.password.length < 10) errors.password = "Medium";
      else errors.password = "strong";
    }
  };

  const validateValues = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "username is required.";
    }
    if (!values.password) {
      errors.password = "password is required.";
    }

    if (values.password.length > 10 && values.password !== values.password2) {
      errors.password2 = "password and password2 doesnot match!";
    }

    console.log("errors", errors);
    setErrors(errors);
    return errors;
  };

  const onFinish = async (values) => {
    console.log("values", values);
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

  const handleChange = (e) => {
    console.log("---->", e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const redirectToLoginForm = () => {
    history("/login");
  };

  console.log("values", values);
  return (
    <div className="form">
      <Title className="signuptext">Signup Form</Title>
      <Form.Item hasFeedback={!errors.username} className="inputField">
        <Input
          className="logininput"
          onChange={handleChange}
          placeholder="Username"
          name="username"
        />
        {errors.username && (
          <Typography.Text type="danger">{errors.username}</Typography.Text>
        )}
      </Form.Item>

      <Form.Item hasFeedback={!errors.password} className="inputField">
        <Input.Password
          onChange={handleChange}
          className="logininput"
          placeholder="Password"
          name="password"
        />
        {errors.password && (
          <Typography.Text type="danger">{errors.password}</Typography.Text>
        )}
      </Form.Item>
      <Form.Item hasFeedback={!errors.password2} className="inputField">
        <Input.Password
          onChange={handleChange}
          className="logininput"
          placeholder="Confirm Password"
          name="password2"
        />
        {console.log("password2", errors.password2)}
        {errors.password2 && (
          <Typography.Text type="danger">{errors.password2}</Typography.Text>
        )}
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="button"
          onClick={() => onFinish(values)}
        >
          {loading ? "Signing..." : "Sign up"}
        </Button>
        <Button
          type="link"
          htmlType="button"
          onClick={redirectToLoginForm}
          className="button-link"
        >
          Already have an account?
        </Button>
      </Form.Item>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
