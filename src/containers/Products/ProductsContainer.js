import { connect } from 'react-redux';
import Products from './Products';
import productsActions from '../../redux/actionCreators/products';
import { $page, $pageSize } from '../../redux/actionCreators/paginate';
import productsByCategoryActions from '../../redux/actionCreators/productsByCategory';
import productsByDepartmentActions from '../../redux/actionCreators/productsByDepartment';
import generateActions from '../../redux/actionCreators/generateUniqueCartId';
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
  generate,
  categoriesDepartment
}) => ({
  productsData: products.data,
  metaData: products.meta,
  metaDepartments: productsDepartment.meta,
  metaCategories: productsByCategory.meta,
  inCategory: productsByCategory.data,
  inDepartment: productsDepartment.data,
  categoriesInDepartment: categoriesDepartment,
  departmentData: departments,
  categoriesData: categories,
  generateduniqueId: generate
});

export default connect(
  mapStateToProps,
  {
    productsActions,
    $page,
    $pageSize,
    productsByCategoryActions,
    productsByDepartmentActions,
    categoriesByDepartmentActions,
    departmentsActions,
    categoriesActions,
    generateActions
  }
)(Products);
