import { ErrorMessageProps } from "../../types";

export default function ErrorMessage({
  message
}: ErrorMessageProps) {
  return (
    <p
      style={{
        color: "red",
        fontWeight: "bold",
        margin: "auto",
        fontSize: 18
      }}
    >
      {message} :(
    </p>
  );
}