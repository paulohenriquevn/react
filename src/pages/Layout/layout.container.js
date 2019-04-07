import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../../components/Layout/layout.component';
import { Creators as HeaderActions } from '../../store/ducks/header';

class LayoutContainer extends Component {
  static propTypes = {
    searchRequest: PropTypes.func.isRequired,
  };

  state = {
    search: '',
  };

  handleSearch = (e) => {
    e.preventDefault();

    const { search } = this.state;
    const { searchRequest } = this.props;
    searchRequest(search);

    this.setState({ search: '' });
  };

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.handleSearch}>
          <Layout
            placeholder="Procurar"
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
          >
            {children}
          </Layout>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  header: state.header,
});

const mapDispatchToProps = dispatch => bindActionCreators(HeaderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutContainer);
