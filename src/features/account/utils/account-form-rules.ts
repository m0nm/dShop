import { formRules as authRules } from "@/features/auth";

export const formRules = (password?: string) => ({
  confirmPassword: authRules(password).passwordConfirm,
  email: authRules().email,

  newPassword: {
    ...authRules().password,
    validate: (value: string) => {
      if (password) {
        return (
          password !== value ||
          "New password must be different from the current password!"
        );
      }
    },
  },

  currentPassword: {
    required: "Current password field is required",
  },

  firstName: {
    required: "First name field is required",
  },

  lastName: {
    required: "Last name field is required",
  },

  phone: {
    required: "Phone number is required",
    pattern: { value: /^[0-9]*$/, message: "remove spaces or dashes" },
  },

  country: {
    required: "Country/Region field is required",
  },

  street: {
    required: "Street address field is required",
  },

  city: {
    required: "Town/City field is required",
  },

  state: {
    required: "State field is required",
  },

  zipCode: {
    required: "Zip code field is required",
    pattern: { value: /^[0-9]*$/, message: "Only numbers are allowed" },
  },
});
