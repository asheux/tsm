import { connect } from 'react-redux';
import Products from './Products';
import productsActions from '../../redux/actionCreators/products';

const mapStateToProps = ({products}) => ({
  productsData: products
});

export default connect(
  mapStateToProps,
  {productsActions}
)(Products);
