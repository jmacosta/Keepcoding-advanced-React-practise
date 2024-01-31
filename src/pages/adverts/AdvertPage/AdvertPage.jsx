import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailAdverts } from '../../../store/actions';
import { getAdvertById } from '../../../store/selectors';
import { AdvertDetailCard } from '../AdvertPage/components/AdvertDetailCard';
import './advertPage.css';

function AdvertPage() {
  const { advertId } = useParams();
  const dispatch = useDispatch();
  const advert = useSelector(getAdvertById(advertId));

  useEffect(() => {
    dispatch(detailAdverts(advertId));
  }, [dispatch, advertId]);
  return <AdvertDetailCard key={advertId} advert={advert} />;
}
export default AdvertPage;
