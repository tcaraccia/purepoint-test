import React, { PureComponent } from 'react';
import { Table } from 'reactstrap';
export default class RecipeTable extends PureComponent {
  render() {
    return (
    <Table striped={true} responsive={true} className="mt-5">
      <tbody>
        { this.props.recipes.map(x => {
          return <tr key={x.href}><th>{x.title}</th></tr>
        })}
      </tbody>
    </Table>
    )
  }
}