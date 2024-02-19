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
  return <Button className='w-fit whitespace-nowrap bg-blue-100 border border-blue-700 text-blue-700 hover:bg-blue-800 hover:text-white'>Gerar Relatório Analítico</Button>;
};

const VisionButtonTeste = () => {
  return <Button className='w-fit whitespace-nowrap bg-yellow-500 border border-black text-black hover:bg-black hover:text-yellow-500'>Criar Visão</Button>;
};

const colorSchema = {paginationColor: 'bg-slate-100  ', tableToolbarColor: 'bg-slate-100 ', EditableTableHeadColor: 'bg-white text-gray-700', };
const styleSchema = {paginationStyle: 'p-5  rounded-b-2xl text-slate-500', tabletoolStyle: 'rounded-md', EditableTableHeadStyle: 'rounded-xl', };

const secondaryColorSchema = {
  paginationColor: 'bg-black',
  tableToolbarColor: 'bg-black',
  EditableTableHeadColor: 'bg-black text-white',
};

const secondaryStyleSchema = {
  paginationStyle: 'p-5 rounded-b-2xl text-yellow-500',
  tabletoolStyle: 'rounded-md',
  EditableTableHeadStyle: 'rounded-xl',
};

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
    iconStyles: 'text-blue-600',
  },
};


export const Secondary = {
  args: {
    primary: true,
    columns: columns,
    data: data,
    pagination: pagination,
    table: 'products',
    withoutSearch: false,
    onToolbarRight: { Component: VisionButtonTeste },
    height: 'default',
    changedData: [],
    primaryKey: 'id',
    sortDesc: false,
    searchKey: 'query',
    sortColumn: '',
    withoutScroll: true,
    withoutPagination: false,
    separatedToolbar: true,
    colorSchema: secondaryColorSchema, 
    styleSchema: secondaryStyleSchema, 
    iconStyles: 'text-yellow-500',
  },
};
