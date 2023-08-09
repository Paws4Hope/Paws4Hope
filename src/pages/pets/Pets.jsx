import { useQuery } from '@tanstack/react-query';
import { AnimalKindApi, AnimalApi, SidoApi, SigunguApi } from '../../api/api';

function Pets() {
  const { data, status } = useQuery(['animalApi'], AnimalKindApi);

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
