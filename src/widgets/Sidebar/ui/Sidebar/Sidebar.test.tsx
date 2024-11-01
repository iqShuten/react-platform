import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/test/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Button', () => {
  test('Test render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toogle', () => {
    componentRender(<Sidebar />);
    const toogleBtn = screen.getByTestId('sidebar-toogle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
