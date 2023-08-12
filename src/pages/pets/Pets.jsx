import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AnimalKindApi, AnimalApi, SidoApi, SigunguApi } from '../../api/api';
import { useSelector } from 'react-redux';

function Pets() {
  const { data, status } = useQuery(['animalApi'], AnimalApi);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>Error fetching data</p>;
  }

  return (
    <div>
      <button>서울</button>
      <button>부산</button>
      <p>Status: {status}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Pets;
