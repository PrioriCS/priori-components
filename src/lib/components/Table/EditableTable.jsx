import { noop, isEmpty } from 'lodash';
import { useState } from 'react';
import EditableTableBody from './EditableTableBody';
import EditableTableHead from './EditableTableHead';
import TableToolbar from './TableToolbar';
import Pagination from './Pagination';
import { twMerge } from 'tailwind-merge';

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
  colorSchema = '',
  styleSchema = '',
  iconStyles = '',
  separatedPagination = false,
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
  const { paginationStyle, tabletoolStyle, headStyle } = styleSchema;
  const { paginationColor, tableToolbarColor, headColor } = colorSchema;
  return (
    <div
      className={twMerge(
        'shadow-gray-600 drop-shadow-[0_0_8px_rgba(30,64,175,0.15)] w-full',
        className,
        separatedToolbar || separatedPagination ? 'rounded-xl p-3.5 bg-white' : ''
      )}>
      <div className={separatedPagination ? 'pb-4' : ''}>
        {!withoutSearch && (
          <TableToolbar
            editable={true}
            onSave={() => onSave()}
            editing={editing}
            radius='md'
            width='md'
            separatedToolbar={separatedToolbar}
            onSearchChange={onSearchChange}
            searchKey={searchKey}
            colorSchema={tableToolbarColor}
            styleSchema={tabletoolStyle}>
            {!isEmpty(onToolbarRight) && <Component options={options} />}
          </TableToolbar>
        )}
      </div>
      <div className={twMerge('max-w-full overflow-auto', separatedToolbar ? headStyle : '', availableHeights[height])}>
        <table className={twMerge('overflow-auto', withoutScroll ? 'w-full' : 'w-screen')}>
          <EditableTableHead
            color={colorSchema}
            style={styleSchema}
            columns={columns}
            sortDesc={sortDesc}
            setSortDesc={setSortDesc}
            sortColumn={sortColumn}
            setSortColumn={setSortColumn}
            colorSchema={headColor}
            styleSchema={headStyle}
            iconStyles={iconStyles}
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
      {!withoutPagination && (
        <Pagination
          currentPage={pagination?.current_page}
          pages={pagination?.last_page}
          table={table}
          canChangePage={!editing}
          styleSchema={paginationStyle}
          separatedPagination={separatedPagination}
          colorSchema={paginationColor}
        />
      )}
    </div>
  );
}
