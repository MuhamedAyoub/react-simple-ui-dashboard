import React from "react";
import Input from "./Input";
export const Form = () => {
  return (
    <form>
      <Input place="muhamed_ayoub" name="username" type="text" />
      <Input name="email" type="email" place="muhammed@gmail.com" />
      <Input name="phone" type="tel" place="+213561475310" />
      <Input name="password" type="password" />
      <Input name="country" type="text" />
      <Input name="address" type="text" />
      <button>Send</button>
    </form>
  );
};
