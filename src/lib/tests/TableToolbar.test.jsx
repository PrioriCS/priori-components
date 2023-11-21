import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TableToolbar from '../components/Table/TableToolbar';

jest.mock('@inertiajs/inertia-react', () => ({
    usePage: () => ({
      url: 'https://example.com',
    }),
  }));
test('renders TableToolbar component', () => {
  const props = {
    searchKey: 'query',
    onSearchChange: jest.fn(),
    children: <div>Children component</div>,
    background: 'slate',
    radius: 'none',
    iconColor: 'primary',
    placeholder: 'Pesquisar...',
    width: 'sm',
    justifyContent: 'start',
    editing: false,
    editable: false,
    onSave: jest.fn(),
    onSaveFilters: jest.fn(),
    saveFilters: true,
    paddingX: 'default',
    paddingY: 'default',
    paddingBottom: 'none',
  };

  const { getByPlaceholderText, getByText } = render(<TableToolbar {...props} />);

  expect(getByPlaceholderText('Pesquisar...')).toBeInTheDocument();
  expect(getByText((content, element) => content.includes('Salvar') && element.tagName === 'BUTTON')).toBeInTheDocument();
  expect(getByText('Salvar Filtros')).toBeInTheDocument();
  expect(getByText('Children component')).toBeInTheDocument();

  fireEvent.change(getByPlaceholderText('Pesquisar...'), { target: { value: 'search term' } });

  expect(props.onSearchChange).toHaveBeenCalledWith('search term');

  fireEvent.click(getByText((content, element) => content.includes('Salvar') && element.tagName === 'BUTTON'));


  fireEvent.click(getByText('Salvar Filtros'));

  expect(props.onSaveFilters).toHaveBeenCalled();
});