import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import authenticatorClient from "../../services/authenticator-api-client";

// Zod Schema
const loginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
});

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = async (data) => {
        // console.log("Login Data:", data);
        setMessage("");

        try {
            await authenticatorClient.logIn(data.username, data.password);
            const from = location.state?.from || { pathname: "/" };
            navigate(from);
        } catch (eMsg) { 
            setMessage(eMsg);
        }
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="container" style={{ maxWidth: "420px" }}>
                <div className="card shadow-lg border-0 rounded-4">
                    {/* Header */}
                    <div
                        className="card-header border-0 rounded-top-4 text-white text-center py-3"
                        style={{
                            background:
                                "linear-gradient(135deg, #0d6efd, #6610f2)", // Bootstrap primary → purple
                        }}
                    >
                        <h4 className="mb-1 fw-bold">Welcome Back</h4>
                        <small className="opacity-75">
                            Please sign in to continue
                        </small>
                    </div>

                    {
                        message
                            ? <div className="col-sm-6 offset-sm-3 mt-3">
                                <p className="alert alert-danger">{message}</p>
                            </div>
                            : null
                    }

                    {/* Body */}
                    <div className="card-body p-4">
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            {/* Username */}
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-semibold">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    className={`form-control form-control-lg ${errors.username ? "is-invalid" : ""
                                        }`}
                                    placeholder="Enter your username"
                                    {...register("username")}
                                />
                                {errors.username && (
                                    <div className="invalid-feedback">
                                        {errors.username.message}
                                    </div>
                                )}
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label fw-semibold">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className={`form-control form-control-lg ${errors.password ? "is-invalid" : ""
                                        }`}
                                    placeholder="Enter your password"
                                    {...register("password")}
                                />
                                {errors.password && (
                                    <div className="invalid-feedback">
                                        {errors.password.message}
                                    </div>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="rememberMe"
                                    />
                                    <label className="form-check-label small" htmlFor="rememberMe">
                                        Remember me
                                    </label>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-link btn-sm text-decoration-none p-0"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {/* Submit */}
                            <button
                                className="btn btn-primary btn-lg w-100 rounded-3"
                                type="submit"
                            >
                                Login
                            </button>
                        </form>
                    </div>

                    {/* Footer (optional) */}
                    <div className="card-footer text-center py-3 bg-white rounded-bottom-4">
                        <small className="text-muted">
                            Don&apos;t have an account?{" "}
                            <button
                                type="button"
                                className="btn btn-link btn-sm text-decoration-none p-0"
                            >
                                Sign up
                            </button>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}
