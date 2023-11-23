import { MdArrowDownward, MdArrowUpward, MdKeyboardArrowDown, MdOutlineSortByAlpha, MdSwapVert } from 'react-icons/md';
import Dropdown from '../Dropdown';
import Checkbox from '../Input/Checkbox';
import { noop, update } from 'lodash';
import Label from '../Label';
import React from 'react';
import { toggleSort } from '../../utilities/sort';

function DropdownItemTableHeader({ array, onItemChange, defineBgColor, width = 'w-44', display = noop }) {
  return (
    <Dropdown className='-my-2'>
      <Dropdown.Trigger>
        <span className='inline-flex rounded-md'>
          <button type='button'>
            <MdKeyboardArrowDown className='text-xl mt-1.5 ml-2 bg-gray-200 rounded active:bg-gray-300' />
          </button>
        </span>
      </Dropdown.Trigger>
      <Dropdown.Content
        position='fixed'
        width={width}
        shadow='drop-shadow-[0_0_8px_rgba(30,64,175,0.15)] shadow-gray-200'
        className='overflow-x-auto h-32'>
        {array?.map((item, key) => (
          <div
            className='border-b border-gray-300 p-2 font-normal text-gray-500 flex items-center text-start justify-between'
            key={key}>
            <Label forInput={item.label} value={display(item.label)} className={defineBgColor(key)} noTextColor />
            <div className='mr-2'>
              <Checkbox
                checked={item.active}
                id={item.label}
                name={item.label}
                data-id={item.id}
                color='primary600'
                border='rounded-full'
                onChange={() => onItemChange(key, array)}
              />
            </div>
          </div>
        ))}
      </Dropdown.Content>
    </Dropdown>
  );
}

function SortButton({ sortDesc, onClick, isSorted, icon }) {
  let Icon = icon;

  if (isSorted) {
    Icon = sortDesc ? MdArrowDownward : MdArrowUpward;
  }

  return (
    <button type='button' onClick={onClick}>
      <Icon className='text-base ml-2 text-primary-600 rounded' />
    </button>
  );
}

export default function EditableTableHead({ columns = [], sortColumn, setSortColumn, setSortDesc, sortDesc }) {
  const BoundSortButton = ({ columnKey, type }) => (
    <SortButton
      sortDesc={sortDesc}
      onClick={() => toggleSort(columnKey, setSortDesc, setSortColumn, sortColumn, sortDesc)}
      isSorted={sortColumn === columnKey}
      icon={type === 'date' || type === 'number' ? MdSwapVert : MdOutlineSortByAlpha}
    />
  );

  const defineBgColor = (key, color, rowStyle) => {
    return rowStyle ? `${rowStyle(color[key])} px-2 rounded-full` : 'bg-white';
  };

  const edit = (key, array) => {
    return update(array, {
      [key]: {
        $set: { ...array[key], active: !array[key].active },
      },
    });
  };

  return (
    <thead className='text-base border-b border-gray-300 text-gray-700 w-full divide-x sticky top-0 z-10'>
      <tr className='w-full divide-x bg-slate-50 '>
        {columns.map((column, i) => {
          return (
            column.visible &&
            !column.disabled && (
              <th className={`py-3.5 font-normal hover:bg-primary-50 ${column.style}`} key={i}>
                <div className='flex items-center justify-center'>
                  {column.icon && <div className='mr-2'>{column.icon}</div>}
                  {column.title}
                  {column.sort && <BoundSortButton columnKey={column.key} type={column.type} />}
                  {column.dropdown && (
                    <DropdownItemTableHeader
                      array={column.dropdown.data}
                      defineBgColor={(key) => defineBgColor(key, column.dropdown.data, column.rowStyle)}
                      width={column.dropdown.width}
                      onItemChange={(key) =>
                        column.dropdown.onChange(
                          edit(key, column.dropdown.data),
                          column.dropdown.changer,
                          column.dropdown.key,
                          column.dropdown.only
                        )
                      }
                    />
                  )}
                </div>
              </th>
            )
          );
        })}
      </tr>
    </thead>
  );
}
