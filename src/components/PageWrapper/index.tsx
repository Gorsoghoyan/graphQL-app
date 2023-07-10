import { Fragment } from "react";
import { ErrorMessage, Spinner } from "../";
import { PageWrapperProps } from "../../types";

export default function PageWrapper({
  error,
  loading,
  children
}: PageWrapperProps) {
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage message={error.message} />
      ) : children}
    </Fragment>
  );
}