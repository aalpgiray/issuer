import * as React from 'react';
import * as ReactMarkdown from "react-markdown";
import { Accordion, DropdownProps, Form, Icon, Image, InputOnChangeData, Label, Popup, Segment, Table } from 'semantic-ui-react'
import { getIssues } from '../Api/GitHub/github';
import { IIssue } from '../Api/GitHub/github.types';
import Contributers from '../Filter/Components/contributers';
import Directions from '../Filter/Components/directions';
import Labels from '../Filter/Components/labels';
import Sort from '../Filter/Components/sort';
import State from '../Filter/Components/state';
import Filter from '../Filter/filter';
import FilterObject, { IFilter } from '../Filter/FilterObject';
import { calculateColor } from '../Helpers/luma';

interface IAppState {
  issues: IIssue[];
  page: number;
  perPage: number;
  filter: IFilter;
  isFiltersVisible: boolean;
}

class Issues extends React.Component<{}, IAppState> {
  public state = {
    filter: new FilterObject,
    isFiltersVisible: true,
    issues: [] as IIssue[],
    page: 1,
    perPage: 20,
  }

  public componentWillMount() {
    this.getIssues();
  }

  public filterChange = (filter: IFilter) => {
    this.setState({ filter }, () => {
      this.getIssues();
    });
  }

  public getIssues = async () => {
    const issues = await getIssues({
      assignee: this.state.filter.assignee,
      creator: this.state.filter.creator,
      direction: this.state.filter.direction,
      labels: this.state.filter.labels.join(","),
      mentioned: this.state.filter.mentioned,
      page: this.state.page,
      perPage: this.state.perPage,
      since: this.state.filter.since,
      sort: this.state.filter.sort,
      state: this.state.filter.state,
    });
    this.setState({ issues });
  }

  public handleChange = (event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData | DropdownProps) => {
    this.setState({ [data.name]: data.value }, () => {
      this.getIssues();
    })
  }

  public handleFilterCollapse = () => {
    this.setState({ isFiltersVisible: !this.state.isFiltersVisible })
  }

  public render() {
    return <React.Fragment>

      <Segment inverted={true}>
        <Accordion inverted={true}>
          <Accordion.Title index={0} active={this.state.isFiltersVisible} onClick={this.handleFilterCollapse}>
            <Icon name='dropdown' />
            Filter Pannel
          </Accordion.Title>
          <Accordion.Content active={this.state.isFiltersVisible}>
            <Filter onChange={this.filterChange} filters={[
              { name: "labels", InputElement: Labels },
              { name: "assignee", InputElement: Contributers },
              { name: "creator" },
              { name: "mentioned" },
              { name: "state", InputElement: State },
              { name: "directions", InputElement: Directions },
              { name: "sort", InputElement: Sort },
              { name: "since", type: "datetime-local" }
            ]} />
          </Accordion.Content>
        </Accordion>
      </Segment>

      <Segment inverted={true}>
        <Form inverted={true}>
          <Form.Group>
            <Form.Input onChange={this.handleChange} name="page" value={this.state.page} label="Page" />
            <Form.Input onChange={this.handleChange} name="perPage" fluid={true} value={this.state.perPage} label="Page Size" />
          </Form.Group>
        </Form>
      </Segment>

      <Segment inverted={true}>
        <Table inverted={true} celled={true} padded={true}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine={true} textAlign="center">User</Table.HeaderCell>
              <Table.HeaderCell singleLine={true} textAlign="center">Assignee</Table.HeaderCell>
              <Table.HeaderCell singleLine={true}>Title</Table.HeaderCell>
              <Table.HeaderCell singleLine={true}>Labels</Table.HeaderCell>
              <Table.HeaderCell singleLine={true}>Status</Table.HeaderCell>
              <Table.HeaderCell singleLine={true}>Date Last Modified</Table.HeaderCell>
              <Table.HeaderCell singleLine={true}>Issue</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.issues.map(issue => (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  <Popup
                    inverted={true}
                    trigger={
                      // tslint:disable-next-line:jsx-no-lambda
                      <Image circular={true} src={issue.user.avatar_url} size="tiny" onClick={() => window.open(issue.user.html_url)} />
                    }
                    content={issue.user.login}
                  />
                </Table.Cell>
                <Table.Cell>
                  {issue.assignee && <Popup
                    inverted={true}
                    trigger={
                      // tslint:disable-next-line:jsx-no-lambda
                      <Image circular={true} src={issue.assignee.avatar_url} size="tiny" onClick={() => window.open(issue.assignee.html_url)} />
                    }
                    content={issue.user.login}
                  />}
                </Table.Cell>
                <Table.Cell verticalAlign="top">
                  {issue.title}
                </Table.Cell>
                <Table.Cell singleLine={true} verticalAlign="top">
                  <Label.Group>
                    {issue.labels.map(l => <Label style={{ background: '#' + l.color, filter: "sepia(0.5)", color: calculateColor(l.color) }} key={l.id}>{l.name}</Label>)}
                  </Label.Group>
                </Table.Cell>
                <Table.Cell verticalAlign="top">
                  <Label color={issue.state === "open" ? "green" : "red"}>{issue.state}</Label>
                  {/* <Rating icon='star' defaultRating={3} maxRating={3} /> */}
                </Table.Cell>
                <Table.Cell singleLine={true} verticalAlign="top">
                  <b>
                    {new Date(issue.updated_at) > new Date(issue.created_at) ? new Date(issue.updated_at).toLocaleString() : new Date(issue.created_at).toLocaleString()}
                  </b>
                </Table.Cell>
                <Table.Cell verticalAlign="top" width={8} style={{
                  display: "block",
                  maxHeight: "16em",
                  overflow: "hidden",
                }}>
                  <ReactMarkdown source={issue.body} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    </React.Fragment>
  }
}

export default Issues;