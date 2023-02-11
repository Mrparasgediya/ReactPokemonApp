import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  return <div>{error.data}</div>;
};

export default ErrorPage;
