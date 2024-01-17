import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAdvert } from '../../../api/service';
import './advertPage.css';
import { AdvertDetailCard } from './components/AdvertDetailCard';

function AdvertPage() {
  const { advertId } = useParams();
  const navigate = useNavigate();

  const [advert, setAdvert] = useState([]);
  useEffect(() => {
    getAdvert(advertId)
      .then(advert => setAdvert(advert))
      .catch(error => {
        if (error.status === 404) {
          navigate('/404');
        }
      });
  }, [navigate, advertId]);

  return <AdvertDetailCard key={advertId} advert={advert} />;
}
export default AdvertPage;
