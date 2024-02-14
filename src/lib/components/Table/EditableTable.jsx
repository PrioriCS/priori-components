import { noop, isEmpty } from 'lodash';
import { useState } from 'react';
import EditableTableBody from './EditableTableBody';
import EditableTableHead from './EditableTableHead';
import TableToolbar from './TableToolbar';
import Pagination from './Pagination';

export default function EditableTable({
  className,
  pagination,
  height = 'default',
  columns = [],
  data = [],
  changedData = [],
  onToolbarRight = {},
  primaryKey = 'id',
  table = '',
  sortDesc = false,
  searchKey = 'query',
  sortColumn = '',
  withoutScroll = false,
  withoutPagination = false,
  withoutSearch = false,
  separatedToolbar = false,
  route = noop,
  setChangedData = noop,
  setSortDesc = noop,
  setSortColumn = noop,
  onSearchChange = noop,
}) {
  const [editing, setEditing] = useState(false);

  function onSave() {
    route(changedData);
    setEditing(false);
  }

  const availableHeights = {
    default: 'max-h-[60vh]',
    md: '2xl:max-h-[55vh] max-h-[38vh]',
    lg: 'max-h-[60vh] 2xl:max-h-[65vh]',
    xl: 'max-h-[65vh] 2xl:max-h-[75vh]',
  };

  const { Component, ...options } = onToolbarRight;

  return (
    <>
      <div className='pb-4'>
        {!withoutSearch && (
          <TableToolbar
            editable={true}
            onSave={() => onSave()}
            editing={editing}
            radius='md'
            width='md'
            separatedToolbar={separatedToolbar}
            onSearchChange={onSearchChange}
            searchKey={searchKey}>
            {!isEmpty(onToolbarRight) && <Component options={options} />}
          </TableToolbar>
        )}
      </div>
      <div
        className={`rounded-xl bg-white p-3.5 shadow-gray-600 drop-shadow-[0_0_8px_rgba(30,64,175,0.15)] w-full ${className}`}>
        <div className={`max-w-full rounded-t-xl overflow-auto ${availableHeights[height]}`}>
          <table className={`overflow-auto ${withoutScroll ? 'w-full' : 'w-screen'}`}>
            <EditableTableHead
              columns={columns}
              sortDesc={sortDesc}
              setSortDesc={setSortDesc}
              sortColumn={sortColumn}
              setSortColumn={setSortColumn}
            />
            <EditableTableBody
              columns={columns}
              data={data}
              setEditing={setEditing}
              setChangedData={setChangedData}
              primaryKey={primaryKey}
            />
          </table>
        </div>

        <div>
          <div className='bg-gray-200 p-5 hidden sm:block rounded-b-2xl'>
            {!withoutPagination && (
              <Pagination
                currentPage={pagination?.current_page}
                pages={pagination?.last_page}
                table={table}
                canChangePage={!editing}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
