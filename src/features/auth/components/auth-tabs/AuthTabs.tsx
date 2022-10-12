import React from "react";
import { Login } from "../login";
import { Register } from "../register";
import {
  AuthTabsContainer,
  TabContent,
  TabsList,
  TabTrigger,
} from "./auth-tabs.styles";

export const AuthTabs = () => {
  return (
    <AuthTabsContainer defaultValue="login">
      <TabsList>
        <TabTrigger value="login">Login</TabTrigger>
        <span>Or</span>
        <TabTrigger value="register">Register</TabTrigger>
      </TabsList>

      <TabContent value="login">
        <Login />
      </TabContent>

      <TabContent value="register">
        <Register />
      </TabContent>
    </AuthTabsContainer>
  );
};
