import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { loginFormControls } from "../../config";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { loginFormData, setLoginFormData, loginWithFirebase, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  function handleLoginOnSubmit(event) {
    event.preventDefault();

    loginWithFirebase().then((result) => {
      console.log(result, "result12345");
      if (result) {
        setLoading(false);
        navigate("/profile");
      }
    });
  }

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h1>Welcome Back</h1>
        <p>Login Page</p>
        <CommonForm
          formControls={loginFormControls}
          formData={loginFormData}
          setFormData={setLoginFormData}
          buttonText={"Login"}
          onSubmit={handleLoginOnSubmit}
        />
      </div>
    </div>
  );
}

export default LoginPage;
