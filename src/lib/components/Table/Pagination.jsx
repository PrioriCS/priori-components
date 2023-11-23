import { setCurrentPage } from '@/utilities/sort';
import React from 'react';
import { MdFirstPage, MdLastPage, MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import PageButton from '../PageButton';

export default function Pagination({ currentPage = 1, pages, table, canChangePage = true }) {
  const maxButtonPages = 5;
  const lastButton = currentPage < pages ? maxButtonPages - 1 : maxButtonPages;

  return (
    <div className='flex justify-end rounded-md'>
      <span className='flex items-center text-sm font-medium text-gray-500'>
        Página {currentPage} de {pages}
      </span>
      <div className='flex ml-8 space-x-2'>
        <PageButton
          disabled={currentPage === 1 || !canChangePage}
          onClick={() => setCurrentPage(1, table)}
          icon={MdFirstPage}
        />
        <PageButton
          disabled={currentPage === 1 || !canChangePage}
          icon={MdNavigateBefore}
          onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage, table)}
        />

        {Array.from({ length: Math.min(maxButtonPages, pages) })
          .map((_, index) => 1 + index + Math.max(currentPage - lastButton, 0))
          .map((itemPage) => (
            <PageButton
              key={itemPage}
              active={itemPage === currentPage}
              onClick={() => setCurrentPage(itemPage, table)}
              number={itemPage}
              disabled={!canChangePage}
            />
          ))}

        <PageButton
          disabled={currentPage === pages || !canChangePage}
          icon={MdNavigateNext}
          onClick={() => setCurrentPage(currentPage < pages ? currentPage + 1 : currentPage, table)}
        />
        <PageButton
          disabled={currentPage === pages || !canChangePage}
          icon={MdLastPage}
          onClick={() => setCurrentPage(pages, table)}
        />
      </div>
    </div>
  );
}
