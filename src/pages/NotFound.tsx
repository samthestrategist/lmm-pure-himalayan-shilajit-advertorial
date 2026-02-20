import { ADV_PUBLICATION_NAME } from "../config";

const NotFound = () => (
  <div style={{ textAlign: "center", padding: "80px 20px" }}>
    <h1>Page Not Found</h1>
    <a href="/lmm-advertorial-golden-template/">Return to {ADV_PUBLICATION_NAME}</a>
  </div>
);

export default NotFound;
