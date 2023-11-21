import { noop, isEmpty } from 'lodash';
import React from 'react';
import EditableTableBody from './EditableTableBody';
import EditableTableHead from './EditableTableHead';
import TableToolbar from './TableToolbar';
import Pagination from './Pagination';

export default function EditableTable({
  columns = [],
  data = [],
  setData = noop,
  className,
  pagination,
  table = '',
  editing = false,
  setEditing = noop,
  sortDesc = false,
  setSortDesc = noop,
  sortColumn = '',
  setSortColumn = noop,
  onSearchChange = noop,
  searchKey = 'query',
  withoutScroll = false,
  onToolbarRight = {},
  withoutPagination = false,
  withoutSearch = false,
  height = 'default',
  route = noop,
}) {
  function onSave() {
    let payload = { data: [] };

    data.forEach((d) => {
      let installation = { id: d.id };

      d.data.forEach((obj) => {
        installation[obj.key] = obj.value;
      });
      payload.data.push(installation);
    });

    route(payload);

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
    <div className={`shadow-md sm:rounded-lg w-full absolute ${className}`}>
      {!withoutSearch && (
        <TableToolbar
          editable={true}
          onSave={() => onSave()}
          editing={editing}
          radius='lg'
          onSearchChange={onSearchChange}
          searchKey={searchKey}>
          {!isEmpty(onToolbarRight) && <Component options={options} />}
        </TableToolbar>
      )}
      <div className={`max-w-full overflow-auto ${availableHeights[height]}`}>
        <table className={`overflow-auto ${withoutScroll ? 'w-full' : 'w-screen'}`}>
          <EditableTableHead
            columns={columns}
            sortDesc={sortDesc}
            setSortDesc={setSortDesc}
            sortColumn={sortColumn}
            setSortColumn={setSortColumn}
          />
          <EditableTableBody columns={columns} data={data} setData={setData} setEditing={setEditing} />
        </table>
      </div>

      <div>
        <div className='bg-slate-50 p-5 hidden sm:block rounded-b-lg'>
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
  );
}
