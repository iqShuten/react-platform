import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWihTranslation';
import { Sidebar } from './Sidebar';

describe('Button', () => {
  test('Test render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Test toogle', () => {
    renderWithTranslation(<Sidebar />);
    const toogleBtn = screen.getByTestId('sidebar-toogle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
