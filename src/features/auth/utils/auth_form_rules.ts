export const formRules = (password?: string) => ({
  email: {
    required: "Email field is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },

  name: {
    required: "Name field is required",
    minLength: {
      value: 4,
      message: "Name must be at least 4 characters long",
    },
  },

  password: {
    required: "Password field is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters long",
    },
  },

  passwordConfirm: {
    required: "Confirm password field is required",
    validate: (value: string) => {
      if (password) {
        return password === value || "Passwords don't match!";
      }
    },
  },
});
