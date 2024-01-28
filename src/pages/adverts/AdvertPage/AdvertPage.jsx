import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAdvertById } from '../../../store/selectors';
import './advertPage.css';
import { AdvertDetailCard } from './components/AdvertDetailCard';

function AdvertPage() {
  const { advertId } = useParams();
  const advert = useSelector(getAdvertById(advertId));
  return <AdvertDetailCard key={advertId} advert={advert} />;
}
export default AdvertPage;
