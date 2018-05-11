import * as React from 'react';
import * as ReactMarkdown from "react-markdown";
import { Image, Label, Popup, Table } from 'semantic-ui-react'
import { getIssues } from '../Api/GitHub/github';
import { IIssue } from '../Api/GitHub/github.types';
import { calculateColor } from '../Helpers/luma';

interface IAppState {
  issues: IIssue[];
}

class Issues extends React.Component<any, IAppState> {
  public state = {
    count: 1,
    issues: [] as IIssue[],
  }
  public async componentDidMount() {
    const issues = await getIssues({});
    this.setState({ issues });
  }
  public render() {

    return (
      <div className="App">
        <Table inverted={true} celled={true} padded={true}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine={true} textAlign="center">User</Table.HeaderCell>
              <Table.HeaderCell singleLine={true} textAlign="center">Assignee</Table.HeaderCell>
              <Table.HeaderCell singleLine={true}>Title</Table.HeaderCell>
              <Table.HeaderCell singleLine={true}>Labels</Table.HeaderCell>
              <Table.HeaderCell singleLine={true}>Status</Table.HeaderCell>
              <Table.HeaderCell singleLine={true}>Date Created</Table.HeaderCell>
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
                  {issue.state}
                  {/* <Rating icon='star' defaultRating={3} maxRating={3} /> */}
                </Table.Cell>
                <Table.Cell singleLine={true} verticalAlign="top">
                  <b>
                    {new Date(issue.created_at).toLocaleString()}
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
      </div>
    );
  }
}

export default Issues;