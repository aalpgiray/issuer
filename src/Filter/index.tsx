import React = require("react");
import { Dropdown, Segment } from "semantic-ui-react";
import { getUsers } from "../Api/GitHub/github";
import { IUser } from "../Api/GitHub/github.types";

interface IFilterState {
    users: IUser[];
}

class Filter extends React.Component<any, IFilterState> {
    public state = {
        users: [] as IUser[],
    }
    public async componentDidMount() {
        const users = await getUsers();

        this.setState({
            users
        });
    }
    public render() {

        return (
            <Segment inverted={true}>
                <Dropdown placeholder='Assignee' fluid={true} multiple={true} selection={true} options={this.state.users.map(a => ({
                    image: a.avatar_url,
                    key: a.id,
                    text: a.login,
                    value: a.id,
                }))} />
            </Segment>
        )
    }
}

export default Filter;