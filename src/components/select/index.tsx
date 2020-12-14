import ReactSelect, { Props } from 'react-select';
import AsyncSelect from 'react-select/async';
import React, { Fragment } from 'react';
import { customStyle } from './style'

const Select: React.FC<Props & { canRequest?: boolean }> = ({
  canRequest,
  loadOptions,
  ...props
}) => {
  const styles = customStyle()
  
  return (
    <Fragment>
      {canRequest ? (
        <AsyncSelect
          loadOptions={loadOptions}
          styles={styles}
          {...props}
        />
      ) : (
        <ReactSelect
          styles={styles}
          {...props}
        />
      )}
    </Fragment>
  );
};

export default Select;
