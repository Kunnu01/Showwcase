import React from 'react';
import { EducationModalProps } from '../../model/education'
import { Title } from './title';
import Modal from 'react-modal'
import { EducationForm } from 'components/education/form';

const EducationModal: React.FC<EducationModalProps> = ({
  className,
  children,
  onSubmit,
  ...props
}) => {
  return (
    <Modal
      {...props}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <Title>
        Add Education
      </Title>
      <EducationForm />
    </Modal>
  )
}

export { EducationModal }
