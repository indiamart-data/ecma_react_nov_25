import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// 1. Define Zod Schema
const userSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters")
});

const HookFormDemo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(userSchema)
    });

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
                                        {...register("name")}
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
                                        {...register("email")}
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
                                        {...register("password")}
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

// // Dev1
// var obj = { id: 1, name: "Manish", city: "Pune" }
// display(obj);

// // Dev 2
// function display(obj) {
//     const keysArr = Object.keys(obj);

//     keysArr.forEach(key => {
//         console.log(obj[key]);
//     })
// }
