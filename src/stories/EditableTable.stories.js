import EditableTable from '../lib/components/Table/EditableTable';

export default {
  title: 'EditableTable',
  component: EditableTable,
};

const columns = [
  {
    title: 'ONT',
    key: 'quote.source_id',
    visible: true,
    sort: true,
    type: 'number',
    editable: false,
    style: 'w-1/12',
    center: true,
  },
  {
    title: 'Nome do Cliente',
    key: 'quote.client',
    visible: true,
    sort: true,
    type: 'text',
    editable: false,
    style: 'w-1/3',
    center: true,
  },
];

const data = [
  {
    data: [
      { key: 'quote.source_id', value: 1 },
      { key: 'quote.client', value: 'Bernardo Kowalsky' },
    ],
  },
];

const pagination = {
  current_page: 1,
  last_page: 10,
};

export const Primary = {
  args: {
    primary: true,
    columns: columns,
    data: data,
    pagination: pagination,
    className: 'border-l-8 border-blue-700',
    table: 'products',
    withoutSearch: false,
    onToolbarRight: {},
    height: 'default',
    changedData: [],
    primaryKey: 'id',
    sortDesc: false,
    searchKey: 'query',
    sortColumn: '',
    withoutScroll: false,
    withoutPagination: false,
  },
};
