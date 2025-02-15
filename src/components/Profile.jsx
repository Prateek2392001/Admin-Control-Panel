import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/userSLice";
import "./style.css";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUser({ [name]: value }));
  };

  return (
    <>
      <div className="profile-container">
        <div class="page-breadcrumb d-none d-sm-flex align-items-center">
          <div class="breadcrumb-title pe-3 text-white">Pages</div>
          <div class="ps-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 p-0">
                <li>
                  <a href="javascript:;">
                    <i class="bi bi-house-door text-light"></i>
                  </a>
                </li>
                <li
                  class="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  User Profile
                </li>
              </ol>
            </nav>
          </div>
          <div class="ms-auto">
            <div class="btn-group">
              <button type="button" class="btn btn-light">
                Settings
              </button>
              <button
                type="button"
                class="btn btn-light split-bg-light dropdown-toggle dropdown-toggle-split me-5"
                data-bs-toggle="dropdown"
              >
                {" "}
                {/* <span class="visually-hidden">Toggle Dropdown</span> */}
              </button>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                {" "}
                <a class="dropdown-item" href="javascript:;">
                  Action
                </a>
                <a class="dropdown-item" href="javascript:;">
                  Another action
                </a>
                <a class="dropdown-item" href="javascript:;">
                  Something else here
                </a>
                <div class="dropdown-divider"></div>{" "}
                <a class="dropdown-item" href="javascript:;">
                  Separated link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="profile-cover bg-dark">
          {/* <img src="./BannerImage.png"></img> */}
        </div>

        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="mb-0">My Account</h5>
                <hr />
                <div class="card shadow-none border">
                  <div class="card-header">
                    <h6 class="mb-0">USER INFORMATION</h6>
                  </div>
                  <div class="card-body">
                    <form class="row g-3">
                      <div class="col-6">
                        <label class="form-label">Username</label>
                        <input
                          type="text"
                          class="form-control"
                          value={user.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label">Email address</label>
                        <input
                          type="text"
                          class="form-control"
                          value={user.Email}
                          onChange={handleChange}
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label">First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          value={user.name}
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label">Last Name</label>
                        <input
                          type="text"
                          class="form-control"
                          value={user.Lastname}
                          onChange={handleChange}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div class="card shadow-none border">
                  <div class="card-header">
                    <h6 class="mb-0">CONTACT INFORMATION</h6>
                  </div>
                  <div class="card-body">
                    <form class="row g-3">
                      <div class="col-12">
                        <label class="form-label">Address</label>
                        <input
                          type="text"
                          class="form-control"
                          value={user.Address}
                          onChange={handleChange}
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label">City</label>
                        <input
                          type="text"
                          class="form-control"
                          value={user.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label">Country</label>
                        <input
                          type="text"
                          class="form-control"
                          value={user.country}
                          onChange={handleChange}
                        />
                      </div>
                      <div class="col-6">
                        <label class="form-label">Pin Code</label>
                        <input
                          type="text"
                          class="form-control"
                          value={user.pincode}
                          onChange={handleChange}
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label">About Me</label>
                        <textarea
                          class="form-control"
                          rows="4"
                          cols="4"
                          placeholder="Describe yourself..."
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="text-start">
                  <button type="button" class="btn btn-primary px-4">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card shadow-sm border-0 overflow-hidden">
              <div class="card-body">
                <div class="profile-avatar text-center">
                  <img
                    src="./profile.png"
                    class="rounded-circle shadow"
                    width="120"
                    height="120"
                    alt=""
                  />
                </div>
                <div class="d-flex align-items-center justify-content-around mt-5 gap-3">
                  <div class="text-center">
                    <h4 class="mb-0">45</h4>
                    <p class="mb-0 text-secondary">Friends</p>
                  </div>
                  <div class="text-center">
                    <h4 class="mb-0">15</h4>
                    <p class="mb-0 text-secondary">Photos</p>
                  </div>
                  <div class="text-center">
                    <h4 class="mb-0">86</h4>
                    <p class="mb-0 text-secondary">Comments</p>
                  </div>
                </div>
                <div class="text-center mt-4">
                  <h4 class="mb-1">Jhon Deo, 27</h4>
                  <p class="mb-0 text-secondary">Sydney, Australia</p>
                  <div class="mt-4"></div>
                  <h6 class="mb-1">Frontend developer - Codeedge Technology</h6>
                </div>
                <hr />
                <div class="text-start">
                  <h5 class="">About</h5>
                  <p class="mb-0" />
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem.
                </div>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent border-top">
                  Followers
                  <span class="badge bg-primary rounded-pill">95</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                  Following
                  <span class="badge bg-primary rounded-pill">75</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                  Templates
                  <span class="badge bg-primary rounded-pill">14</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
