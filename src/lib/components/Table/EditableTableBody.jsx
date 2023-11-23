import { edit } from '@/lib/utilities/immutability';
import { generateInputMask, normalizeMoney } from '@/lib/utilities/masks';
import { isNil, noop } from 'lodash';
import React from 'react';
import Input from '../Input/Input';
import InputSelect from '../Input/InputSelect';

function handleChange(
  e,
  setData,
  setEditing,
  data,
  i,
  index,
  key,
  id,
  isMoney,
  especificCalc = noop,
  constrainedId,
  uppercase = false
) {
  setData((currentData) => {
    return edit(data, i, {
      id: id,
      data: edit(currentData[i].data, index, {
        value: isMoney
          ? normalizeMoney(e.target.value)
          : constrainedId
          ? parseInt(e.target.value)
          : uppercase
          ? e.target.value.toUpperCase()
          : e.target.value,
        key: key,
      }),
    });
  });

  especificCalc(data, setData, key, i, id, e.target.value);

  setEditing(true);
}

export default function EditableTableBody({ columns, data, setData, setEditing }) {
  return (
    <tbody className='font-normal text-base border-b border-gray-300 text-gray-500 w-full divide-y'>
      {data.map((row, i) => {
        return (
          <tr className='w-full divide-x text-sm' key={i}>
            {row.data.map((cell, index) => {
              return columns.map(({ component: Component }, column) => {
                return (
                  cell.key === columns[column].key &&
                  columns[column].visible &&
                  !columns[column].disabled && (
                    <td key={columns[column].key} className='bg-white'>
                      {columns[column].personalized ? (
                        <Component value={cell.value} id={row.id} extra={columns[column].extra} addicioalInfo={cell.link} />
                      ) : columns[column].type === 'select' ? (
                        <InputSelect
                          value={cell.value}
                          key={row.id}
                          center={columns[column].center}
                          disabled={!columns[column].editable}
                          onChange={(e) => {
                            handleChange(
                              e,
                              setData,
                              setEditing,
                              data,
                              i,
                              index,
                              cell.key,
                              row.id,
                              columns[column].money,
                              columns[column].especificCalc,
                              columns[column].constrainedId
                            );
                          }}
                          options={columns[column].options}
                        />
                      ) : (
                        <Input
                          round='none'
                          key={row.id}
                          className={`py-4 w-full border-none text-sm ${columns[column].center ? 'text-center' : ''}`}
                          type={columns[column].type}
                          value={isNil(cell.value) ? '' : cell.value}
                          readOnly={!columns[column].editable}
                          mask={generateInputMask(columns[column].type, cell.value) || columns[column].mask}
                          maskchar=' '
                          onChange={(e) => {
                            handleChange(
                              e,
                              setData,
                              setEditing,
                              data,
                              i,
                              index,
                              cell.key,
                              row.id,
                              columns[column].money,
                              columns[column].especificCalc,
                              false,
                              columns[column].uppercase
                            );
                          }}
                        />
                      )}
                    </td>
                  )
                );
              });
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
