import { errorFormValues } from "../../../store/UserDetails/action";

interface ButtonProps {
  readonly increment: () => void;
}

interface IFormProps {
  name: string;
  role: string;
  email: string;
  password: string;
  errorName: string;
  errorEmail: string;
  errorFormatEmail: string;
  errorPassword: string;
  errorFormatPassword: string;
}
