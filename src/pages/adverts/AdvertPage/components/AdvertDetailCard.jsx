import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfirmComponent } from '../../../../Components/sharedComponents/ConfirmComponent';
import { deleteAdvert } from '../../../../api/service';
import noImage from '../../../../assets/no-image.jpg';
import { sellSearchIcon } from '../../../../utils/sellSearchIcon';
export const AdvertDetailCard = ({ advert = {} }) => {
  const { tags = [], sale, name, photo, price } = advert;
  const [imageError, setImageError] = useState(false);
  const [confirm, setconfirmed] = useState(false);

  const navigate = useNavigate();
  const resetFunction = () => {
    setconfirmed(false);
  };
  const id = advert.id;
  const deletethisAdvert = async id => {
    await deleteAdvert(id);
    navigate('/');
  };

  return (
    <>
      <main className='detail__advert mainCard '>
        <div className='modal'>
          <div className='modal__header'>
            <span className='modal__title'>{name}</span>
          </div>
          <div className='modal__body'>
            <div className='modal-content sell_or_search' id='sellSearch'>
              <img
                src={sellSearchIcon(sale).image}
                alt={sellSearchIcon(sale).alt}
              />
            </div>
            <div className='modal-content photo' id='photo'>
              <img
                className='photo'
                src={`${photo === null ? noImage : photo}`}
                alt={name}
              />
            </div>
            {/* <!-- Price of Product --> */}
            <div className='modal-content price' id='price'>
              <span className='price'>{`${price}€`}</span>
            </div>

            <div className='modal-content tag' id='tags'>
              {tags.map((tag, index) => (
                <span key={index} className='tags'>
                  {tag}{' '}
                </span>
              ))}
            </div>
          </div>
          <div className='modal__footer'>
            <button
              className='button button--primary '
              id='deleteButton'
              onClick={() => {
                setconfirmed(true);
              }}
            >
              Borrar Anuncio
            </button>
          </div>
        </div>
        {confirm && (
          <ConfirmComponent
            execFunction={deletethisAdvert}
            resetFunction={resetFunction}
            parameter={id}
          >
            ¿Está seguro que desea borrar el anuncio?
          </ConfirmComponent>
        )}
      </main>
    </>
  );
};
