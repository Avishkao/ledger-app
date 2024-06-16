import React, { useState } from "react";
import { Form, Input, Typography } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/signup.css";

const SignupForm = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});

  const onFinish = async (values) => {
    console.log("values", values);

    if (Object.keys(errors).length > 0) {
      return;
    } else {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      try {
        const response = await axios.post(
          `http://localhost:3000/login`,
          values
        );
        console.log(response);
        toast("Congratulations! You are logged in sucessfully");
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

  console.log("values", values);
  return (
    <div className="form">
      <div className="title-container-login">
        <h1 className="signin-heading">Welcome</h1>
        <h1 className="signin-heading2"> Again!</h1>
      </div>
      <p className="signin-text">Login to your account.</p>
      <Form.Item hasFeedback={!errors.username} className="inputField">
        <Input
          className="logininput"
          onChange={handleChange}
          placeholder="Username"
          name="username"
        />
      </Form.Item>

      <Form.Item hasFeedback={!errors.password} className="inputField">
        <Input.Password
          onChange={handleChange}
          className="logininput"
          placeholder="Password"
          name="password"
        />
      </Form.Item>

      <Form.Item>
        <button
          type="primary"
          htmlType="submit"
          className="button"
          onClick={() => onFinish(values)}
        >
          {loading ? "loging..." : "Login"}
        </button>
      </Form.Item>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
