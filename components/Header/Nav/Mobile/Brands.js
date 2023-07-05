import { useState, useEffect } from 'react';
import GET_BRANDS from '@/app/graphql/queries/GET_BRANDS';
import { useQuery } from '@apollo/client';
import client from '@/app/apollo-client';
import Link from 'next/link';

export default function Brands() {
  const { loading, error, data } = useQuery(GET_BRANDS, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.brands.nodes.map((brand) => (
        <div key={brand.id}>
          <Link href={`/brands/${brand.slug}`}>
            {/* Brand logo from featuredImage */}
            <img style={{width: 64}} src={brand.brandFields.brandLogo.sourceUrl} alt={brand.title} />
            {brand.title}
          </Link>
        </div>
      ))}
    </div>
  );
}