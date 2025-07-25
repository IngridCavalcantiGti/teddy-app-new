import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ClientCard from './ClientCard';

describe('ClientCard', () => {
    it('renders the name, button, salary, and company valuation', () => {
        render(
            <MemoryRouter>
                <ClientCard
                    id={1}
                    name="Cliente Teste"
                    salary={5000}
                    companyValuation={10000}
                />
            </MemoryRouter>
        );

        expect(screen.getByText('Cliente Teste')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /adicionar cliente/i })).toBeInTheDocument();
        expect(screen.getByText(/Salário:\s*R\$\s*5\.000,00/)).toBeInTheDocument();
       expect(screen.getByText(/10\.000,00/)).toBeInTheDocument();

    });

});
