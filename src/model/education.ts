import { Props } from 'react-modal';

export interface EducationModalProps extends Props {
  children?: React.ReactNode;
  onSubmit?: () => void;
}
