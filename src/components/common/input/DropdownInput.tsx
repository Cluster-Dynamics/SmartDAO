import React from 'react'
import Select from 'react-select'

interface ISelect {
  label: string,
};

const options = [
    { value: 'transfer', label: 'Propose a Transfer' },
    { value: 'add-member', label: 'Propose to Add Member to Group' },
    { value: 'remove-member', label: 'Propose to Remove Member to Group' },
    { value: 'propose-poll', label: 'Propose a Poll' },
  ]

const DropdownInput = ({ label }: ISelect) => (
  <div className='w-full'>
    <label
      htmlFor="underline_select"
      className="block mb-2 text-sm font-medium text-grey"
    >
      {label}
    </label>
    <Select options={options} className="w-2/5 text-sm" isSearchable    styles={{
      option: (base) => ({
        ...base,
        border: `1px dotted #1F1B36`,
        height: '100%',
      }),
    }} placeholder="Search proposal by name" />
  </div>
);

export default DropdownInput;
