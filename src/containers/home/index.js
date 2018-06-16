import React from 'react'
import { connect } from 'react-redux'
import { onInputChange } from '../../modules/home'
import Search from '../../components/search'
import RecipeTable from '../../components/recipes'
import { Container } from 'reactstrap';

const Home = props => (
  <Container>
    <Search onInputChange={props.onInputChange}/>
    <RecipeTable recipes={props.recipes}/>
  </Container>
)

const mapStateToProps = state => ({
  recipes: state.recipes.all,
  status: state.status

})

const mapDispatchToProps = dispatch => ({
  dispatch,
  onInputChange: (event) => dispatch(onInputChange(event.target.value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)