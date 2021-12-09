/** @format */

import * as React from "react";
import "./style.css";

import { Typography, Grid, Box, Link, Button } from "@material-ui/core";
import { Drafts, Lock } from "@material-ui/icons";

export default function UserLogin() {
  return (
    <>
      <form>
        <Grid container className="main_container">
          <img src="/assets/logo.png" alt="Not Found" />
          <Box className="login_body_container">
            <Typography className="text-center software">SOFTWARE</Typography>
            <Typography className="text-center welcome">
              Welcome Back
            </Typography>
            <Box className="input-fields">
              <Box className="email-field">
                <Drafts className="envalop" />
                <input type="email" className="email" placeholder="Email Id" />
              </Box>

              <Box className="password-field">
                <Lock className="lock" />
                <input
                  type="password"
                  className="password"
                  placeholder="Password"
                />
              </Box>
              <label className="d-flex align-items-center justify-content-center mt-1">
                Sorry! {"Incorrect Login Or Password"}
              </label>
              <label className="d-flex align-items-center justify-content-center mt-2 gap-4 forget_pass">
                Don’t Remember Your Password?
                <Link href="#">{"Forget Password"}</Link>
              </label>

              <Button variant="contained" className="signin">
                LOG IN
              </Button>
              <Button variant="outlined" className="signup">
                SIGN UP
              </Button>
            </Box>
          </Box>
        </Grid>
      </form>
    </>
  );
}
