import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import TechItem from './TechItem';

const TechListModal = ({ tech, getTechs }) => {
  const { techs, loading } = tech;

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const displayTechs = () => {
    return (
      !loading &&
      techs.length !== 0 &&
      techs.map((tech) => <TechItem key={tech.id} tech={tech} />)
    );
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">{displayTechs()}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getTechs,
})(TechListModal);
