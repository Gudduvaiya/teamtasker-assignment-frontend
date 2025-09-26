import "./style.css";
import { Button, Form, Input, Typography } from "antd";
import "./style.css";
import { useState } from "react";
import { notificationBox } from "../../lib/helper";
import { SignInAPI, SignUpAPI } from "../../lib/services/APIServices";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState<"SignIn" | "SignUp">(
    "SignIn"
  );
  const [isLoading, setIsloading] = useState(false);
  // const userData = JSON.parse(sessionStorage.getItem("userData"));

  const onSubmitForm = (formData: any) => {
    setIsloading(true);

    if (currentState === "SignIn") {
      SignInAPI(formData)
        .then(({ data }) => {
          sessionStorage.setItem("userData", JSON.stringify(data));
          navigate("/");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          notificationBox("Unauthorized!", "err.message", "error");
        })
        .finally(() => {
          setIsloading(false);
        });
    }
    if (currentState === "SignUp") {
      SignUpAPI(formData)
        .then(({ data }) => {
          sessionStorage.setItem("userData", JSON.stringify(data));
          navigate("/");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          notificationBox("Unauthorized!", "Invalid Credentials", "error");
        })
        .finally(() => {
          setIsloading(false);
        });
    }
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: "#6f9fffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundPositionY: "88%",
          height: "100vh",
        }}
        // className="zoom-in-zoom-out"
      >
        <div className="main-form-div">
          <div className="flex flex-col justify-center mt-3">
            <Title
              level={5}
              style={{
                letterSpacing: "4px",
                color: "#222866",
                fontWeight: "bold",
              }}
            >
              MYPROLIST Teamtasker
            </Title>
          </div>

          <Form
            name="basic"
            style={{ width: "100%" }}
            initialValues={{ remember: true }}
            layout="vertical"
            onFinish={onSubmitForm}
          >
            {currentState === "SignUp" ? (
              <>
                 <Form.Item
                  label={
                    <p className="font-bold text-sm leading-4 text-[#f27187]">
                      Name
                    </p>
                  }
                  name="name"
                  rules={[
                    { required: true, message: "Please input your User Id!" },
                  ]}
                >
                  <Input
                    style={{ background: "transparent", color: "white" }}
                    className="inputFeilds"
                    placeholder="Enter Your Name"
                  />
                </Form.Item>

                 <Form.Item
                  label={
                    <p className="font-bold text-sm leading-4 text-[#f27187]">
                      email ID
                    </p>
                  }
                  name="email"
                  rules={[
                    { required: true, message: "Please input your User Id!" },
                  ]}
                >
                  <Input
                    style={{ background: "transparent", color: "white" }}
                    className="inputFeilds"
                    placeholder="Enter Your User Id"
                  />
                </Form.Item>

                 <Form.Item
                  label={
                    <p className="font-bold text-sm leading-4 text-[#f27187]">
                      Password
                    </p>
                  }
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input
                    style={{ background: "transparent", color: "white" }}
                    className="inputFeilds"
                    placeholder="Enter Your Password"
                  />
                </Form.Item>
              </>
            ) : currentState === "SignIn" ? (
              <>
                <Form.Item
                  label={
                    <p className="font-bold text-sm leading-4 text-[#f27187]">
                      email ID
                    </p>
                  }
                  name="email"
                  rules={[
                    { required: true, message: "Please input your User Id!" },
                  ]}
                >
                  <Input
                    style={{ background: "transparent", color: "white" }}
                    className="inputFeilds"
                    placeholder="Enter Your Email Id"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <p className="font-bold text-sm leading-4 text-[#f27187]">
                      Password
                    </p>
                  }
                  name="password"
                  className="!m-0"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    style={{ background: "transparent" }}
                    placeholder="Enter Your Password"
                    className="inputFeilds"
                  />
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item
                  label="Enter OTP"
                  name="otp"
                  rules={[{ required: true, message: "Please enter OTP!" }]}
                >
                  <Input
                    style={{ background: "transparent" }}
                    className="!placeholder:text-red-400"
                  />
                </Form.Item>
              </>
            )}

            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                className="w-full font-bold border-none text-white mt-4"
                loading={isLoading}
              >
                {currentState === "SignIn"
                  ? "Sign In"
                  : currentState === "SignUp"
                  ? "Sign Up"
                  : currentState === "ForgotPass"
                  ? "Request OTP"
                  : "Verify OTP"}
              </Button>
            </Form.Item>
          </Form>
          {
            // (currentState === "SignIn" || currentState === "SignUp")
             (
              <div>
                {currentState === "SignUp" ? (
                  <p className="text-gray-500 font-bold mb-3">
                    Already have an Account!
                    <span
                      className="text-[#222866] cursor-pointer"
                      onClick={() => setCurrentState("SignIn")}
                    >
                      {" "}
                      Sign in
                    </span>
                  </p>
                ) : (
                  <p className="text-gray-500 font-bold mb-3">
                    Don't have an Account!!
                    <span
                      className="text-[#222866] cursor-pointer"
                      onClick={() => setCurrentState("SignUp")}
                    >
                      {" "}
                      Sign Up
                    </span>
                  </p>
                )}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
