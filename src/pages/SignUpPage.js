import React from "react";
import LayoutAuth from "layout/LayoutAuth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "components/label";
import { Input } from "components/input";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "components/icons/IconEyeToggle";
import useToggleValue from "hooks/useToggleValue";
import ButtonGoogle from "components/button/ButtonGoogle";
import { useDispatch } from "react-redux";
import { authRegister } from "store/auth/auth-slice";

const schema = yup.object({
  name: yup.string("").required("This field is required"),
  email: yup.string().email("Invalid email address").required("This field is required"),
  password: yup.string().required("This field is required").min(8, "Password must min 8 character"),
});

const SignUpPage = () => {
  const dispatch = useDispatch()
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } = useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } = useToggleValue();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  /**
   * Function register account for user
   * @param {object} values 
   */
  const handleSignUp = (values) => {
    dispatch(authRegister(values))
  };

  return (
    <LayoutAuth heading="SignUp">
      <p className="mb-6 lg:mb-8 text-center text-xs lg:text-sm font-normal text-text3 dark:text-text3">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign up with google" />
      <p className="text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">Or sign up with email</p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input control={control} type="text" name="name" placeholder="Van Quy" error={errors.name?.message}></Input>
        </FormGroup>
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
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="lg:text-sm text-xs text-text2 dark:text-text3 flex-1">
              I agree to the <span className="text-secondary underline">Terms of Use</span> and have read and understand
              the <span className="text-secondary underline">Privacy policy.</span>
            </p>
          </Checkbox>
        </div>
        <Button type="submit" kind="primary" className="w-full">
          Create my account
        </Button>
      </form>
    </LayoutAuth>
  );
};

export default SignUpPage;
