import { Inertia } from '@inertiajs/inertia';
import { filter, isEmpty } from 'lodash';
import { asInt } from './utils';

export function setCurrentPage(page, only) {
  Inertia.reload({
    data: { page },
    only: [only],
  });
}

export function updateSearch(x, searchKey, table) {
  Inertia.reload({
    data: { [searchKey]: isEmpty(x) ? undefined : x.toLowerCase() },
    only: [table],
  });
}

export function toggleSort(column, setSortDesc, setSortColumn, sortColumn, sortDesc) {
  const newSortDesc = column === sortColumn ? !sortDesc : true;

  setSortDesc(newSortDesc);
  setSortColumn(column);

  Inertia.reload({
    data: { sort_desc: newSortDesc, sort_column: column },
  });
}

export function initializeStatusFilter(query, statuses, key) {
  const excluded = query[key] || '';
  const values = excluded.split(',');

  return statuses.map((status) => ({
    label: status,
    active: !values.includes(status),
  }));
}

export function initializeVendorFilter(query, salesmen, key) {
  const excluded = query[key] || '';
  const values = excluded.split(',').map(asInt);

  return salesmen.map((user) => ({
    id: user.salesman.id,
    label: user === null ? user.salesman.initials : user.name,
    active: !values.includes(user.salesman.id),
  }));
}

export function updateStatusFilter(newState, setCheckStatus, statusKey, only) {
  setCheckStatus(newState);

  const exclude = filter(newState, (el) => !el.active).map((el) => el.label);

  Inertia.reload({
    data: { [statusKey]: isEmpty(exclude) ? undefined : exclude.toString() },
    only: [only],
  });
}

export function updateVendorFilter(newState, setCheckVendor, salesmenKey, only) {
  setCheckVendor(newState);
  const exclude = filter(newState, (el) => !el.active).map((el) => el.id);

  Inertia.reload({
    data: {
      [salesmenKey]: isEmpty(exclude) ? undefined : exclude.toString(),
    },
    only: [only],
  });
}
