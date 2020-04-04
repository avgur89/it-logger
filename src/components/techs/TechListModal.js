import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);

    const res = await fetch('/techs');
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  const displayTechs = () => {
    return (
      !loading && techs.map(tech => <TechItem key={tech.id} tech={tech} />)
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

export default TechListModal;
