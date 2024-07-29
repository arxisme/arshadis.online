
import React from "react";

const signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-1 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-accent">Sign In</h2>
        <form>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered text-white w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text ">Password</span>
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered text-white  w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-accent w-full">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signin;
