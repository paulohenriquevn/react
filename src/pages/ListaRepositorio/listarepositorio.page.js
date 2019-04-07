import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/Table/table.component';

class ListaRepositorio extends Component {
  static propTypes = {
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
      error: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
  };

  header = [
    { titulo: 'Nome', valor: 'name' },
    { titulo: 'Descrição', valor: 'description' },
    { titulo: 'Link', valor: 'url' },
  ];

  render() {
    const { favorites } = this.props;
    return (
      <Fragment>
        <div>
          {favorites.loading && <span>Carregando...</span>}
          {!!favorites.error && <span style={{ color: '#f00' }}>{favorites.error}</span>}
        </div>
        <Table header={this.header} data={favorites.data} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(ListaRepositorio);
