import { isEmpty, isFunction, isNil, noop } from 'lodash';
import Input from '../Input/Input';
import InputSelect from '../Input/InputSelect';
import { generateInputMask } from '../../utilities/masks';

export default function EditableTableBody({
  columns = [],
  data = [],
  setData = noop,
  setEditing = noop,
  setChangedData = noop,
  primaryKey = 'id',
}) {
  const rowToObj = (row) => {
    const obj = {};
    row.data.forEach((cell) => {
      obj[cell.key] = cell.value;
    });
    return obj;
  };

  const handleEdit = (row, rowIndex, newData, key, dataTretement) => {
    if (isFunction(dataTretement)) newData = dataTretement(newData);
    setEditing(true);
    const newRow = row;
    const newDataArray = [...data];

    newRow.data.find((cell) => cell.key === key).value = newData;
    newDataArray[rowIndex] = newRow;

    const newRowObj = rowToObj(newRow);
    setChangedData((changedData) => [...changedData.filter((row) => row[primaryKey] !== newRowObj[primaryKey]), newRowObj]);

    setData(newDataArray);
  };
  return (
    <tbody className='font-normal text-base text-gray-500 w-full divide-y bg-slate-50'>
      {data.map((row, rowIndex) => {
        return (
          <tr className='w-full divide-x text-sm ' key={rowIndex}>
            {row?.data?.map((cell, cellIndex) => {
              const {
                component: Componet,
                type,
                key,
                editable,
                personalized,
                extra,
                options,
                center,
                mask,
                maskChar,
                dataTretement,
              } = columns.find((column) => column.key === cell.key && column.visible);
              if (!type) return <td className='p-2' key={cellIndex}></td>;
              if (personalized)
                return (
                  <td>
                    <Componet value={cell.value} cellValues={cell} extra={extra} adicioalInfo={cell.link} />
                  </td>
                );
              if (type === 'select') {
                return (
                  <td key={cellIndex + ' ' + rowIndex}>
                    <InputSelect
                      value={cell.value}
                      key={cellIndex + ' ' + rowIndex}
                      center={center}
                      disabled={!editable}
                      options={options}
                      onChange={(e) => {
                        handleEdit(row, rowIndex, e.target.value, key, dataTretement);
                      }}
                    />
                  </td>
                );
              }
              return (
                <td key={cellIndex + ' ' + rowIndex}>
                  <Input
                    round='none'
                    key={cellIndex + ' ' + rowIndex}
                    className={`py-4 w-full border-none text-sm  ${center ? 'text-center' : ''}`} //linha para estilizar.
                    type={isEmpty(type) ? 'text' : type}
                    value={isNil(cell.value) ? '' : cell.value}
                    readOnly={!editable}
                    mask={generateInputMask(type, cell.value) || mask}
                    maskchar={maskChar ? maskChar : ' '}
                    onChange={(e) => {
                      handleEdit(row, rowIndex, e.target.value, key, dataTretement);
                    }}
                  />
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
