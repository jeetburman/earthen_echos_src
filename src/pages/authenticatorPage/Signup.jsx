import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { registerUser, clearError } from "../../store/slices/authSlice";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    businessName: "",
    region: "",
    country: ""
  });

  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role
    };

    if (formData.role === 'artisan') {
      userData.artisanProfile = {
        businessName: formData.businessName,
        region: formData.region,
        country: formData.country
      };
    }

    const result = await dispatch(registerUser(userData));
    
    if (result.type === 'auth/register/fulfilled') {
      navigate("/login", { 
        state: { message: "Registration successful! Please login." } 
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary py-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md shadow-warm">
        <h2 className="text-3xl font-heading font-semibold text-foreground mb-6 text-center">
          Join Earthen Echoes
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center bg-red-50 p-2 rounded">
            {error.message || error}
          </p>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Basic Info */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password (min 6 characters)"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary"
              required
              minLength={6}
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              I want to join as:
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary"
            >
              <option value="user">Customer</option>
              <option value="artisan">Artisan/Seller</option>
            </select>
          </div>

          {/* Artisan-specific fields */}
          {formData.role === 'artisan' && (
            <>
              <div>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business/Studio Name"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="region"
                  placeholder="Region/State"
                  value={formData.region}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-primary text-white rounded-xl hover:bg-primary/90 disabled:opacity-50"
          >
            {status === 'loading' ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-accent font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;