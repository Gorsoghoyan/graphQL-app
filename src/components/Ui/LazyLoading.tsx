import { Spinner } from "../";

export default function LazyLoading() {
  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 300,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "white"
    }}>
      <Spinner thickness={3} size={60} />
    </div>
  );      
}