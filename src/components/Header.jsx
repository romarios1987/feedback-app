import PropTypes from 'prop-types';

export const Header = ({ text }) => {
  return (
    <header style={{ backgroundColor: '#20232a', color: '#61dafb' }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string,
};
