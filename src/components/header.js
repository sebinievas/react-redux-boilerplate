import React from 'react';

import AppBar from 'material-ui/AppBar';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: 1,
      value: 1
    };
  }

  handleProjectChange = (event, index, project) => this.setState({project});

  handleChange = (event, index, value) => this.setState({value});

  renderProjectPicklist() {
    const projects = this.props.projects || [];

    return projects.map((project) => {
      return (
        <MenuItem key={project.id} value={project.id} primaryText={project.title} />
      );
    });
  }

  render() {
    return (
      <header>
        <AppBar title="LODA" />

        <DropDownMenu value={this.state.project} onChange={this.handleProjectChange}>
          {this.renderProjectPicklist()}
        </DropDownMenu>

        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Project Requirements" />
          <MenuItem value={2} primaryText="Resources" />
          <MenuItem value={3} primaryText="Technical Specifications" />
        </DropDownMenu>
      </header>
    );
  }
}
