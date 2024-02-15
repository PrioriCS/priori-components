import Button from '../lib/components/Button';
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
    editable: true,
    style: 'w-1/12',
    center: true,
  },
  {
    title: 'Nome do Cliente',
    key: 'quote.client',
    visible: true,
    sort: true,
    type: 'text',
    editable: true,
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

const ButtonTeste = () => {
  return <Button className='bg-blue-900'>Testando</Button>;
};

const colorSchema = {paginationColor: 'bg-red-900 ', tableToolbarColor: 'bg-red-900 ', EditableTableHeadColor: 'bg-red-900 hover:bg-red-500 text-gray-700'};
const styleSchema = {paginationStyle: 'p-5  rounded-b-2xl', tabletoolStyle: 'rounded-full', EditableTableHeadStyle: 'rounded-xl'};
export const Primary = {
  args: {
    primary: true,
    columns: columns,
    data: data,
    pagination: pagination,
    table: 'products',
    withoutSearch: false,
    onToolbarRight: { Component: ButtonTeste },
    height: 'default',
    changedData: [],
    primaryKey: 'id',
    sortDesc: false,
    searchKey: 'query',
    sortColumn: '',
    withoutScroll: true,
    withoutPagination: false,
    separatedToolbar: true,
    colorSchema: colorSchema,
    styleSchema: styleSchema,
  },
};
