import { connect } from 'react-redux';
import Products from './Products';
import productsActions from '../../redux/actionCreators/products';
import productsByCategoryActions from '../../redux/actionCreators/productsByCategory';
import productsByDepartmentActions from '../../redux/actionCreators/productsByDepartment';
import categoriesByDepartmentActions from '../../redux/actionCreators/categoriesByDepartment';
import departmentsActions from '../../redux/actionCreators/departments';
import categoriesActions from '../../redux/actionCreators/categories';

/**
 * map state to props or updates the
 * component with infomation from the store
 * using the action creators
 *  @param {*} object
 */
const mapStateToProps = ({
  products,
  productsByCategory,
  productsDepartment,
  departments,
  categories,
  categoriesDepartment
}) => ({
  productsData: products,
  inCategory: productsByCategory,
  inDepartment: productsDepartment,
  categoriesInDepartment: categoriesDepartment,
  departmentData: departments,
  categoriesData: categories
});

export default connect(
  mapStateToProps,
  {
    productsActions,
    productsByCategoryActions,
    productsByDepartmentActions,
    categoriesByDepartmentActions,
    departmentsActions,
    categoriesActions
  }
)(Products);
