import { useState, useEffect } from 'react';
import GET_SEGMENTS from '@/app/graphql/queries/GET_SEGMENTS';
import { useQuery } from '@apollo/client';
import client from '@/app/apollo-client';
import Link from 'next/link';

export default function Segments() {
  const { loading, error, data } = useQuery(GET_SEGMENTS, {
    client: client,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.segments.nodes.map((segment) => (
        <div key={segment.id}>
          <Link href={`/segments/${segment.slug}`}>
            {segment.title}
          </Link>
        </div>
      ))}
    </div>
  );
}