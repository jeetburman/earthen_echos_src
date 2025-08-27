import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginUser, clearError } from "../../store/slices/authSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useAppDispatch();
  const { user, token, status, error } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const message = location.state?.message;

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    if (user && token) {
      // Role-based redirection
      switch (user.role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'artisan':
          navigate('/artisan-dashboard');
          break;
        default:
          navigate('/user-dashboard');
      }
    }
  }, [user, token, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md shadow-warm">
        <h2 className="text-3xl font-heading font-semibold text-foreground mb-6 text-center">
          Welcome Back
        </h2>

        {message && (
          <p className="text-green-600 text-sm mb-4 text-center bg-green-50 p-2 rounded">
            {message}
          </p>
        )}
        
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center bg-red-50 p-2 rounded">
            {error.message || error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-primary text-white rounded-xl hover:bg-primary/90 disabled:opacity-50"
          >
            {status === 'loading' ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-accent font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;