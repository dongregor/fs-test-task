import { Products } from './components/products';
import { Filters } from './components/filters';
import { FiltersProvider } from './contexts/filters';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <FiltersProvider>
          <Filters />
          <ErrorBoundary fallback={<p className="error-message">Nie udało się połączyć z API. Spróbuj ponownie później.</p>}>
            <Products />
          </ErrorBoundary>
        </FiltersProvider>
      </div>
    </div>
  );
}

export default App;
