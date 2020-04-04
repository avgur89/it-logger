import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = ({ log, getLogs }) => {
  const { logs, loading } = log;

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader />;
  }

  const displayLogs = () => {
    return !loading && logs.length === 0 ? (
      <p className="center">No logs to show...</p>
    ) : (
      logs.map((log) => <LogItem key={log.id} log={log} />)
    );
  };

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {displayLogs()}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, {
  getLogs,
})(Logs);
