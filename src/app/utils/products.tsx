"use client";
import React, { useEffect, useState } from 'react';
import Card from '../card';

interface Product {
  name: string
  price: string;
  id: string;
  image:string,
  rating: string,
  votes: string,
  popular: boolean,
  available: boolean
}

export default function Products(){
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
        );
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        const result: Product[] = await response.json();
        console.log(result); 
        setData(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className=''>
          {data.map((product) => (
           <li key={product.id}>
           <Card img={product.image}  width={300} height={200}  alt={product.name}/>
         
         </li>
          ))}
        </ul>
      )}
    </div>
  );
};


