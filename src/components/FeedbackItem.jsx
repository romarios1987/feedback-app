import { FaTimes, FaEdit } from 'react-icons/fa';

import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

import { Card } from './shared/Card';

export const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="#20232a" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="#20232a" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
