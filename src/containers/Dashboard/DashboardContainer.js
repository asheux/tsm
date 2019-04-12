import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import departmentsActions from '../../redux/actionCreators/departments';
import categoriesActions from '../../redux/actionCreators/categories';

const mapStateToProps = ({departments, categories}) => ({
  departmentData: departments,
  categoriesData: categories
});

export default connect(
  mapStateToProps,
  {
    departmentsActions,
    categoriesActions
  }
)(Dashboard);
