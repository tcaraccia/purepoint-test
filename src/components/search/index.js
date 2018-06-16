import React, { PureComponent } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
export default class Search extends PureComponent {
  render() {
    const { onInputChange } = this.props
    return (
      <Form inline className="pt-5">
        <FormGroup className="col-md-12">
          <Input  
            className="col-md-11" 
            type="search" 
            name="search" 
            id="searchForm" 
            placeholder="Search for..." 
            onChange={onInputChange} 
          />
          <Button color="light">Search</Button>
        </FormGroup>
      </Form>
    )
  }
}