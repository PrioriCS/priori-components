import React from 'react';
import { Button } from 'prioricomponents';

import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

export default function SelectCheckboxesButton({ allSelected, onClick }) {
  const Icon = allSelected ? MdCheckBoxOutlineBlank : MdCheckBox;
  return (
    <Button style='outlined' color='strong' shadow='bottom' onClick={onClick}>
      {allSelected ? 'Desmarcar todos' : 'Selecionar todos'}
      <Icon data-testid="checkbox-icon" className={twMerge('text-base ml-2')} />
    </Button>
  );
}
