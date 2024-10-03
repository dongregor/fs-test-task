import { useState, useEffect } from 'react';
import { ProductCard } from '../cards/Product';
import { Button } from '../button';
import { useFilterContext } from '../../contexts/filters';
import { ChevronDown } from 'react-feather';
import { IProduct, IProductResponse } from 'interfaces/product';

const Loader = () => {
  return (
    <>
      <div className="flex">
        <div className="inline-block mx-auto h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Pobieranie wyników...</span>
        </div>
      </div>
    </>
  )
}

export const Products = () => {
  const { filters, query } = useFilterContext();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`Error connecting to the API.`);
        }
        const productsData: IProductResponse[] = await response.json();
  
        const parsedProductsData: IProduct[] = productsData.map((p) => {
          return {
            ...p,
            price: {
              ...p.price,
              validFrom: new Date(p.price.validFrom),
              validTo: new Date(p.price.validTo)
            }
          }
        });
  
        setProducts(parsedProductsData);
      } catch (error) {
        console.error("Failed to fetch products from the API:", error);
        setError(true)
      }
      setLoading(false);
    };

    getProducts();
  }, []);


  const searchByCode = products.filter((product) => {
    return product.code.toLowerCase().includes(query.toLowerCase());
  });

  const filteredProducts = searchByCode.filter((product) => {
    if (filters.capacity && product.capacity !== filters.capacity) {
      return false;
    }
    if (filters.energyClass && product.energyClass !== filters.energyClass) {
      return false;
    }
    return !(filters.feature && !product.features.includes(filters.feature));
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (filters.sort === 'price') {
      return a.price.value - b.price.value;
    }
    if (filters.sort === 'capacity') {
      return a.capacity - b.capacity;
    }
    return 0;
  });

  if (error) {
    throw new Error("Couldn't connect to API.")
  }

  if (loading) {
    return (<Loader/>)
  }

  if (filteredProducts.length === 0) {
    return (
      <div>
        <p className="text-center text-gray-500 text-xl mt-4">
          Brak produktów spełniających kryteria wyszukiwania
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 gap-y-5">
        {sortedProducts.map((product) => (
          <ProductCard key={product.code} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button
          variant={'tertiary'}
          value={'Pokaż więcej'}
          icon={<ChevronDown />}
          onClick={() => console.log('some action')}
        />
      </div>
    </>
  );
};
