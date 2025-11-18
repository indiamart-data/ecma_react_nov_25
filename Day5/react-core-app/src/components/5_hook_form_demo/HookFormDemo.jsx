import { useForm } from "react-hook-form";

const HookFormDemo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data: ", data);
    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title mb-0">User Registration Form</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Name Field */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        id="name"
                                        {...register("name", { required: "Name is required" })}
                                        placeholder="Enter your name"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    />
                                    {

                                        errors.name && (
                                            <div className="invalid-feedback">
                                                {errors.name.message}
                                            </div>
                                        )
                                    }
                                </div>

                                {/* Email Field */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input id="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                                        })}
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                    {
                                        errors.email && (
                                            <div className="invalid-feedback">
                                                {errors.email.message}
                                            </div>
                                        )
                                    }
                                </div>

                                {/* Password Field */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input id="password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: "Password must be at least 6 characters" }
                                        })}
                                        type="password"
                                        placeholder="Enter password"
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                                    {
                                        errors.password && (
                                            <div className="invalid-feedback">
                                                {errors.password.message}
                                            </div>
                                        )
                                    }
                                </div>

                                

                                <button type="submit" className="btn btn-primary w-100">
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HookFormDemo;