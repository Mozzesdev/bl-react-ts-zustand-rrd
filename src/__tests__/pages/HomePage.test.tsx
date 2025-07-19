import { render, screen } from '@/__tests__/utils/test-utils';
import { describe, it, expect } from 'vitest';
import HomePage from '@/pages/Home'; // Usamos el alias @

describe('HomePage', () => {
  it('should render the main heading', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', {
      name: /home page/i,
      level: 2,
    });
    expect(heading).toBeInTheDocument();
  });
});
