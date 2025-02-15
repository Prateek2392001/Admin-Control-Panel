import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import SignIn_header from "./SignIn_header";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://robust.mmrsolutions.co.in/api/Login/Admin",
        { email, password }
      );
      console.log(response.data);
      const data = response.data;

      if (response.data.status === 1) {
        Cookies.set("AdminControlToken", data?.data?.accessToken, {
          expires: 7,
        });

        navigate("/");
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SignIn_header />
      <main className="authentication-content">
        <div className="container">
          <div className="mt-4">
            <div className="card rounded-0 overflow-hidden shadow-none border mb-5 mb-lg-0">
              <div className="row g-0">
                <div className="col-12 order-1 col-xl-8 d-flex align-items-center justify-content-center border-end">
                  <img src="/image.png" className="img-fluid" alt="" />
                </div>
                <div className="col-12 col-xl-4 order-xl-2">
                  <div className="card-body p-4 p-sm-5">
                    <h5 className="card-title">Sign In</h5>
                    <p className="card-text mb-4">
                      See your growth and get consulting support!
                    </p>
                    <form className="form-body" onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-12">
                          <label
                            htmlFor="inputEmailAddress"
                            className="form-label "
                          >
                            Email Address
                          </label>
                          <div className="ms-auto position-relative">
                            <input
                              type="email"
                              className="form-control radius-30 ps-3 text-secondary "
                              id="inputEmailAddress "
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label
                            htmlFor="inputChoosePassword"
                            className="form-label"
                          >
                            Enter Password
                          </label>
                          <div className="ms-auto position-relative">
                            <input
                              type="password"
                              className="form-control radius-30 ps-3 text-secondary"
                              id="inputChoosePassword"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-12 d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="rememberMe"
                              onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="rememberMe"
                            >
                              Remember Me
                            </label>
                          </div>
                          <a href="/forgot-password" className="text-primary">
                            Forgot Password?
                          </a>
                        </div>

                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <div className="col-12">
                          <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary radius-30 w-100"
                          >
                            {loading ? "Signing In..." : "Sign In"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignIn;
