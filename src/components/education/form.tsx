import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Input, TextArea } from 'components/input';
import Select from 'components/select';
import { getYearOptions } from './helper';

const Mandatory = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.red};
    &:after {
      content: "*"
    }
  `}
`;

const DateGroup = styled.div`
  ${css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > div {
      flex: 1;
      padding: 5px;
    }
  `}
`

const EducationForm = () => {
  return (
    <Fragment>
      <label>School<Mandatory /></label>
      <Input
        type="text"
        placeholder="Oxford..."
      />
      <label>Degree<Mandatory /></label>
      <Input
        type="text"
        placeholder="Masters in ..."
      />
      <DateGroup>
        <div>
          <label>Start Year<Mandatory /></label>
          <Select
            placeholder="Year"
            isMulti={false}
            options={getYearOptions(false)}
          />
        </div>
        <div>
          <label>End Year<Mandatory /></label>
          <Select
            placeholder="Year"
            isMulti={false}
            options={getYearOptions(true)}
          />
        </div>
      </DateGroup>
      <label>Grade</label>
      <Input
        type="text"
        placeholder="3.2"
      />
      <label>Description</label>
      <TextArea
        rows={4}
      />
    </Fragment>
  )
}

export { EducationForm }
