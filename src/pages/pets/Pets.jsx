import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../../api/api';

function Pets() {
  const { data, status } = useQuery(['fetchData'], fetchData);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>Error fetching data</p>;
  }

  return (
    <div>
      <p>Status: {status}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Pets;
