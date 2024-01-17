import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../Components/sharedComponents/Button';
import { createAdvert } from '../../../api/service';
import searchIcon from '../../../assets/search_icon.svg';
import sellIcon from '../../../assets/sell_icon.svg';
import './NewAdvertPage.css';
function NewAdvertPage() {
  const [content, setContent] = useState({
    name: '',
    sale: null,
    price: 0,
    tags: [],
    photo: null
  });
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();
  const handlersNewAdvert = {
    photo(event) {
      const file = event.target.files[0];
      setContent({
        ...content,
        [event.target.name]: file
      });
    },
    tags(event) {
      const selectedValues = Array.from(event.target.selectedOptions).map(
        option => option.value
      );

      setContent({
        ...content,
        [event.target.name]: selectedValues
      });
    },
    normalInput(event) {
      setContent({
        ...content,
        [event.target.name]: event.target.value
      });
    },
    sale(event) {
      if (event.target.value === 'sell') {
        setContent({
          ...content,
          [event.target.name]: true
        });
      } else {
        setContent({
          ...content,
          [event.target.name]: false
        });
      }
    }
  };
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsFetching(true);
      const advert = await createAdvert({ ...content });
      navigate(`../${advert.id}`, { relative: 'path' });
    } catch (error) {
      if (error.status === 40) {
        navigate('/login');
      }
    } finally {
      setIsFetching(false);
    }
  };
  const isDisabled = !(
    content.name &&
    content.sale !== null &&
    content.price &&
    content.tags.length !== 0 &&
    !isFetching
  );

  return (
    <main className='mainCard'>
      <form id='product_create' onSubmit={handleSubmit}>
        <div className='modal'>
          <div className='modal__header'>
            <span className='modal__title'>Nuevo producto</span>
          </div>
          <div className='modal__body'>
            {/* <!-- Name of Product --> */}
            <div className='input'>
              <label className='input__label' htmlFor='name'>
                Nombre
              </label>
              <input
                id='name'
                className='input__field'
                type='text'
                name='name'
                required
                autoComplete='off'
                title='Por favor rellena este campo'
                value={content.name}
                onChange={handlersNewAdvert.normalInput}
              />
              <p className='input__description'>
                El nombre tiene un limite de 32 caracteres
              </p>
            </div>

            {/* <!-- Image of product --> */}
            <div className='input'>
              <label className='input__label' htmlFor='photo'>
                Imagen
              </label>
              <input
                className='input__field'
                type='file'
                name='photo'
                id='photo'
                onChange={handlersNewAdvert.photo}
              />
              <p className='input__description'>
                Introduce una url válida con la foto de tu producto
              </p>
            </div>
            {/* <!-- Price of Product --> */}
            <div className='input'>
              <label className='input__label' htmlFor='price'>
                Precio
              </label>
              <input
                className='input__field'
                type='number'
                min='0'
                required
                name='price'
                id='price'
                value={content.price}
                onChange={handlersNewAdvert.normalInput}
              />
              <p className='input__description'>
                Precio en € de venta / compra máximo para tu producto
              </p>
            </div>

            {/* <!-- Tags of Product --> */}
            <div className='input'>
              <label className='input__label' htmlFor='tags'>
                Categorias
              </label>
              <select
                className='input__field'
                required
                name='tags'
                id='tags'
                multiple
                // value={content.tags}
                onChange={handlersNewAdvert.tags}
              >
                <option value='lifestyle'>Lifestyle</option>
                <option value='mobile'>Mobile</option>
                <option value='motor'>Motor</option>
                <option value='work'>Work</option>
              </select>
              <p className='input__description'>
                Selecciona la(s) categorias en las que publicar tu anuncio
              </p>
            </div>

            {/* Search / sell Product  */}

            <div className='radio-tile-group'>
              <div className='input-container'>
                <input
                  id='sell'
                  className='radio-button'
                  type='radio'
                  name='sale'
                  required
                  value='sell'
                  onChange={handlersNewAdvert.sale}
                />
                <div className='radio-tile'>
                  <div className='icon sell-icon'>
                    <img src={sellIcon} />
                  </div>
                  <label htmlFor='sell' className='radio-tile-label'>
                    Venta
                  </label>
                </div>
              </div>

              <div className='input-container'>
                <input
                  id='search'
                  className='radio-button'
                  type='radio'
                  name='sale'
                  required
                  value='search'
                  onChange={handlersNewAdvert.sale}
                />
                <div className='radio-tile'>
                  <div className='icon search-icon'>
                    <img src={searchIcon} />
                  </div>
                  <label htmlFor='search' className='radio-tile-label'>
                    Busqueda
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='modal__footer'>
            <Button
              className={'button button--primary '}
              type={'submit'}
              disabled={isDisabled}
            >
              {isFetching ? 'Sending...' : 'Crear anuncio'}
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
}
export default NewAdvertPage;
