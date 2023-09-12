import React from 'react';
import { render } from '@testing-library/react';
import Title from '../components/Title';

test('Renderiza o componente Title com as classes CSS padrão', () => {
  const { container } = render(<Title>Meu Título</Title>);
  const titleElement = container.querySelector('h1');

  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveClass('text-primary-900');
  expect(titleElement).toHaveClass('text-3xl');
  expect(titleElement).toHaveClass('font-light');
  expect(titleElement.textContent).toBe('Meu Título');
});

test('Renderiza o componente Title com classes CSS personalizadas', () => {
  const { container } = render(
    <Title color='red' size='lg' weight='bold' className='custom-class'>
      Título Personalizado
    </Title>
  );
  const titleElement = container.querySelector('h1');

  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveClass('text-red-600 text-xl font-bold custom-class');
  expect(titleElement.textContent).toBe('Título Personalizado');
});

test('Renderiza o componente Title com tamanho e peso padrão', () => {
  const { container } = render(<Title>Título Padrão</Title>);
  const titleElement = container.querySelector('h1');

  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveClass('text-3xl'); 
  expect(titleElement).toHaveClass('font-light'); 
});
