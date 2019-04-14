import { connect } from 'react-redux';
import Products from './Products';
import productsActions from '../../redux/actionCreators/products';
import productsByCategoryActions from '../../redux/actionCreators/productsByCategory';
import productsByDepartmentActions from '../../redux/actionCreators/productsByDepartment';
import categoriesByDepartmentActions from '../../redux/actionCreators/categoriesByDepartment';

const mapStateToProps = ({
  products,
  productsByCategory,
  productsDepartment,
  categoriesDepartment
}) => ({
  productsData: products,
  inCategory: productsByCategory,
  inDepartment: productsDepartment,
  categoriesInDepartment: categoriesDepartment
});

export default connect(
  mapStateToProps,
  {
    productsActions,
    productsByCategoryActions,
    productsByDepartmentActions,
    categoriesByDepartmentActions
  }
)(Products);
