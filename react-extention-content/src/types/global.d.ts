import { ExtendButton } from '@mui/material';

declare global {
  interface ResetPassword {
    email: string;
  }

  interface Password {
    password: string;
  }

  interface SignInUserCredits {
    email: string;
    password: string;
  }

  interface SignUpUserCredits {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    companyWebsite?: string;
  }

  interface DecodeCredits {
    code: string;
  }

  interface GenerateCodeFormData {
    link: string;
    purpose: string;
  }

  interface SetPasswordConfirm extends Password {
    confirmPassword: string;
  }

  type Typography = {
    align?: 'left' | 'right' | 'center' | 'inherit' | 'justify';
    text: string;
    style?: object;
  };

  type CopyBtn = Typography & {
    fill?: string;
  };

  type Button = ExtendButton & {
    type?: string;
    text: string;
  };

  type Link = {
    id: number;
    code: string;
    value: string;
    purpose: string;
    is_active: boolean;
    company: {
      name: string;
      website: string | null;
    };
    author: {
      email: string;
      first_name: string;
      last_name: string;
    };
    datetime_created: string;
  };

  type ResultPage<T> = {
    count: number;
    next: string;
    previous: string;
    results: T[];
  };
}

export {};
