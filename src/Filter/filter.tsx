import React = require("react");
import { Dropdown, Segment } from "semantic-ui-react";
import { ApplicationContext, IApplicationContext } from "../App";

class Filter extends React.Component {
    public renderFilter(context: IApplicationContext) {
        return <Dropdown placeholder='Assignee' fluid={true} multiple={true} selection={true} options={context.users.map(a => ({
            image: a.avatar_url,
            key: a.id,
            text: a.login,
            value: a.id,
        }))} />
    }
    public render() {
        return (
            <Segment inverted={true}>
                <ApplicationContext.Consumer children={this.renderFilter} />
            </Segment>
        )
    }
}

export default Filter;