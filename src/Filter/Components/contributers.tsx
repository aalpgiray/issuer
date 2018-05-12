import * as React from 'react';
import { DropdownProps, Form } from "semantic-ui-react";
import { ApplicationContext, IApplicationContext } from '../../App';

interface IProps {
    value: string | undefined,
    onChange: (event: React.SyntheticEvent<HTMLInputElement>, data: DropdownProps) => void
}

class Contributers extends React.Component<IProps, {}>{
    public renderDropdown = (context: IApplicationContext) => {
        return <Form.Dropdown
            onChange={this.props.onChange}
            name="assignee"
            value={this.props.value}
            fluid={true}
            label='Assignee'
            placeholder='Select if you want to'
            selection={true}
            options={context.users.map(user => ({
                image: user.avatar_url,
                key: user.id,
                text: user.login,
                value: user.login,
            }))} />
    }
    public render() {
        return <ApplicationContext.Consumer children={this.renderDropdown} />;
    }
}

export default Contributers;