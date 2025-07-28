import { OfferProps } from '../../types';

import { useAppDispatch } from '../../hooks';
import { postFavorite } from '../../store/api-action';

type BookmarkProps = {
    id: OfferProps['id'];
    isActive: boolean;
    place?: 'place-card' | 'property';
}

const Bookmark = ({ id, isActive, place = 'place-card' }: BookmarkProps) => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(postFavorite({
      id,
      status: isActive ? 0 : 1
    }));
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`${place}__bookmark-button button${isActive ? ` ${place}__bookmark-button--active` : ''
      }`}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width={place === 'property' ? 31 : 18} height={place === 'property' ? 33 : 19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'From' : 'To'} bookmarks</span>
    </button>
  );
};

export default Bookmark;
