import React from 'react';
import PropTypes from 'prop-types';

const ShelfSelector = ({ shelfs, value, onChange }) => (
  <div className="book-shelf-changer">
    <select value={value || 'none'} onChange={onChange}>
      <option value="label" disabled>Move to...</option>
      {
        shelfs.map(shelf => (
          <option
            value={shelf.id}
            key={shelf.id}
          >
            { shelf.name }
          </option>
        ))
      }
      <option value="none">None</option>
    </select>
  </div>
);

ShelfSelector.propTypes = {
  shelfs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

ShelfSelector.defaultProps = {
  shelfs: [],
  value: null,
  onChange: null,
};

export default ShelfSelector;
