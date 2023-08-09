import { useQuery } from '@tanstack/react-query';
import { AnimalKindApi, AnimalApi, SidoApi, SigunguApi } from '../../api/api';

function Pets() {
  const { data, status } = useQuery(['animalData'], AnimalApi);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>Error fetching data</p>;
  }

  const animalItems = data.response.body.items.item; // Access the array of animal items

  return (
    <div>
      <h1>동물친구들을 소개합니다.</h1>
      <div className="album-container">
        {animalItems.map((animal) => (
          <div key={animal.desertionNo} className="animal-card">
            <img className="animal-image" src={animal.popfile} alt={`Animal ${animal.desertionNo}`} />
            <p>
              <strong>Kind:</strong> {animal.kindCd}
            </p>
            <p>
              <strong>Color:</strong> {animal.colorCd}
            </p>
            <p>
              <strong>Age:</strong> {animal.age}
            </p>
            <p>
              <strong>Happen Place:</strong> {animal.happenPlace}
            </p>
            {/* Add more information as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pets;
