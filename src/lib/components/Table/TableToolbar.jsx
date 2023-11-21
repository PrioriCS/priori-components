import Input from '@/Components/Input/Input';
import { usePage } from '@inertiajs/inertia-react';
import { noop } from 'lodash';
import React from 'react';
import { MdSave, MdSearch } from 'react-icons/md';
import queryString from 'query-string';
import { Button } from 'prioricomponents';
import { twMerge } from 'tailwind-merge';

export default function TableToolbar({
  searchKey,
  onSearchChange = noop,
  children,
  background = 'slate',
  radius = 'none',
  iconColor = 'primary',
  placeholder = 'Pesquisar...',
  width = 'sm',
  justifyContent = 'start',
  editing = false,
  editable = false,
  onSave = noop,
  onSaveFilters = noop,
  saveFilters,
  paddingX = 'default',
  paddingY = 'default',
  paddingBottom = 'none',
}) {
  const { url } = usePage();
  const { query = {} } = queryString.parseUrl(url);
  const [search, setSearch] = React.useState(query[searchKey] || '');

  function handleChange(event) {
    setSearch(event.target.value);

    onSearchChange(event.target.value);
  }

  const availableBackgrounds = {
    slate: 'bg-slate-50',
    white: 'bg-white',
  };

  const availableBorderRadius = {
    none: 'rounded-t-none',
    square: 'rounded-t-md',
    round: 'rounded-t-xl',
    nothing: 'border-none',
  };

  const availableJustifyContents = {
    start: 'justify-start',
    between: 'justify-between',
  };

  const availableWidths = {
    sm: 'lg:w-[36%] w-full',
    md: 'w-1/2',
  };

  const availablePaddingX = {
    default: 'px-6',
    none: 'px-0',
  };

  const availablePaddingY = {
    default: 'py-5',
    none: 'py-0',
  };

  const availablePaddingBottom = {
    md: 'pb-4',
    none: 'pb-0',
  };

  return (
    <div
      className={twMerge(
        'flex flex-row sm:border-b border-gray-300 sm:rounded-t-xl',
        availableBackgrounds[background],
        availablePaddingX[paddingX],
        availablePaddingY[paddingY],
        paddingY === 'none' ? availablePaddingBottom[paddingBottom] : '',
        availableJustifyContents[justifyContent],
        availableBorderRadius[radius]
      )}>
      <div className={`flex w-full ${editable ? 'justify-between items-center' : 'justify-start'}`}>
        <div className={availableWidths[width]}>
          <Input
            value={search}
            onChange={handleChange}
            name='search'
            placeholder={placeholder}
            className='w-full placeholder-gray-400 font-light'
            round={radius}
            size='sm'
            icon={MdSearch}
            iconColor={iconColor}
          />
        </div>
        {editable && editing && (
          <div>
            <Button onClick={() => onSave()} size='sm'>
              Salvar <MdSave className='text-xl ml-2' />
            </Button>
          </div>
        )}
      </div>
      {saveFilters && (
        <div className='xl:w-2/6 2xl:w-1/6 sm:ml-0 justify-end sm:flex hidden'>
          <Button onClick={() => onSaveFilters()} size='sm' responsive>
            Salvar Filtros
          </Button>
        </div>
      )}
      {children}
    </div>
  );
}
