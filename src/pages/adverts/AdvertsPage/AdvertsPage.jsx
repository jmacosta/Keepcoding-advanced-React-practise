import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Aside } from '../../../Components/Layout/Aside.jsx';
import { Main } from '../../../Components/Layout/Main.jsx';
import { loadAdverts } from '../../../store/actions.js';
import { getAdverts } from '../../../store/selectors.js';
import { AdvertCard } from '../AdvertsPage/components/AdvertCard.jsx';
import { FilterAdverts } from '../AdvertsPage/components/FilterAdverts.jsx';

import './advertspage.css';

const AdvertsPage = () => {
  const navigate = useNavigate();
  const adverts = useSelector(getAdverts);

  const [initialAdverts, setInitialAdverts] = useState([]);
  const dispatch = useDispatch();

  // TODO: refactor for apply filters like a array.filter to discrimine adverts
  const onFilterAdverts = filteredAdverts => {
    setAdverts(filteredAdverts);
  };
  useEffect(() => {
    dispatch(loadAdverts());
  }, [dispatch]);

  return adverts.length ? (
    <>
      <Aside className='asideAdvertsPage'>
        <FilterAdverts
          adverts={adverts}
          onFilterAdverts={onFilterAdverts}
          initialAdverts={initialAdverts}
        />
      </Aside>
      <Main className='mainAdvertsPage'>
        {
          <ul>
            {adverts.map(advert => (
              <li key={advert.id}>
                <AdvertCard {...advert} />
              </li>
            ))}
          </ul>
        }
      </Main>
    </>
  ) : (
    <main className='MainLoginPage'>
      <button
        className={'button button--primary '}
        onClick={() => {
          navigate('/adverts/new');
        }}
      >
        Crea tu primer anuncio...
      </button>
    </main>
  );
};
export default AdvertsPage;
