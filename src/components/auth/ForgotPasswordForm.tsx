import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { z } from 'zod';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { emailSchema } from '../../utils/validation';

const forgotPasswordSchema = z.object({
  email: emailSchema,
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm: React.FC = () => {
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: '',
  });
  const [errors, setErrors] = useState<Partial<ForgotPasswordFormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await forgotPasswordSchema.parseAsync(formData);
      // Handle successful validation
      console.log('Form data:', formData);
      // Add your password reset logic here
      setIsSubmitted(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ForgotPasswordFormData> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof ForgotPasswordFormData;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-4">
          We've sent a password reset link to <strong>{formData.email}</strong>
        </p>
        <p className="text-sm text-gray-500">
          Didn't receive the email? Check your spam folder or{' '}
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-blue-600 hover:text-blue-500 transition-colors"
          >
            try again
          </button>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Email Address"
        name="email"
        type="email"
        required
        placeholder="Enter your registered email address"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        tooltip="We'll send a password reset link to this email"
      />

      <Button
        type="submit"
        className="w-full"
        isLoading={isLoading}
        icon={<ArrowRight className="h-4 w-4" />}
      >
        Reset Password
      </Button>

      <div className="text-sm text-center">
        <span className="text-gray-500">Remembered your password?</span>{' '}
        <a
          href="/login"
          className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
        >
          Sign in
        </a>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;