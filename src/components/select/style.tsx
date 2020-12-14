import { Styles } from 'react-select';
import { theme } from '../../theme';

export const customStyle = () => {
  const style: Styles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '40px',
      boxShadow: 'none',
      borderColor: state.menuIsOpen || state.isFocused
          ? theme.color.primary
          : theme.color.grey,
    }),
    container: (provided) => ({
      ...provided,
      marginTop: '10px',
    }),
  };
  return style;
};
