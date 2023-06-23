import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Gallery({ filmTrends, location, to }) {

  return (
    <ul >
      { filmTrends.map(({ id, title }, index) => {
        return (
          <li key={id + index}>
            <Link
              
              to={`${to}${id}`}
              state={{ from: location }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

Gallery.propTypes = {
  filmTrends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
  location: PropTypes.object,
  to: PropTypes.string,
};