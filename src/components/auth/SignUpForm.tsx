import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { z } from 'zod';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import {
  emailSchema,
  passwordSchema,
  nameSchema,
  userTypeSchema,
} from '../../utils/validation';

const signUpSchema = z
  .object({
    fullName: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    userType: userTypeSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

const userTypeOptions = [
  { value: 'patient', label: 'Patient' },
  { value: 'provider', label: 'Healthcare Provider' },
];

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'patient',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof SignUpFormData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signUpSchema.parseAsync(formData);
      console.log('Form data:', formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof SignUpFormData, string>> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof SignUpFormData;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Full Name"
        name="fullName"
        type="text"
        required
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
        tooltip="This is how we'll address you on the platform"
      />

      <Input
        label="Email Address"
        name="email"
        type="email"
        required
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        tooltip="We'll never share your email"
      />

      <Input
        label="Password"
        name="password"
        type="password"
        required
        placeholder="Create a password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        tooltip="Must be at least 8 characters with one uppercase, one lowercase, one number, and one special character"
      />

      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        required
        placeholder="Re-enter your password"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        tooltip="Make sure both passwords match"
      />

      <Select
        label="User Type"
        name="userType"
        required
        value={formData.userType}
        onChange={handleChange}
        error={errors.userType}
        tooltip="Choose your role on the platform"
        options={userTypeOptions}
      />

      <Button
        type="submit"
        className="w-full"
        isLoading={isLoading}
        icon={<ArrowRight className="w-4 h-4" />}
      >
        Create Account
      </Button>

      <div className="text-sm text-center">
        <span className="text-gray-500">Already have an account?</span>{' '}
        <a
          href="/login"
          className="font-medium text-blue-600 transition-colors hover:text-blue-500"
        >
          Sign in
        </a>
      </div>
    </form>
  );
};

export default SignUpForm;