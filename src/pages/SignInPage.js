import React, { useEffect } from "react";
import LayoutAuth from "../layout/LayoutAuth";
import { Link, useNavigate } from "react-router-dom";
import ButtonGoogle from "components/button/ButtonGoogle";
import { Label } from "components/label";
import { Input } from "components/input";
import FormGroup from "components/common/FormGroup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import useToggleValue from "hooks/useToggleValue";
import { IconEyeToggle } from "components/icons/IconEyeToggle";
import { Button } from "components/button";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "store/auth/auth-slice";

const schema = yup.object({
  email: yup.string().email("").required("This field is required"),
  password: yup.string().required("This field is required").min(8, "Password must min 8 character"),
});

const SignInPage = () => {
  const dispatch = useDispatch()
  const { value: showPassword, handleToggleValue: handleTogglePassword } = useToggleValue();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleSignIn = async (values) => {
    try {
      dispatch(authLogin(values));
    } catch (error) {
      console.log(error);
    }
  };

  const { user } = useSelector(state => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (user && user.id) {
      navigate("/")
    }
  },[navigate, user])

  return (
    <LayoutAuth heading="Welcome Back!">
      <p className="mb-6 lg:mb-8 text-center text-xs lg:text-sm font-normal text-text3 dark:text-text3">
        Don't have an account?
        <Link to="/register" className="text-primary font-medium underline">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign up with google" />
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            type="email"
            name="email"
            placeholder="quy0694@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword}></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium text-primary">Forgot password</span>
          </div>
        </FormGroup>
        <Button type="submit" className="w-full" kind="primary">
          Sign in
        </Button>
      </form>
    </LayoutAuth>
  );
};

export default SignInPage;
