import * as React from 'react';
import { DropdownProps, Form } from "semantic-ui-react";

interface IProps {
    value: string | undefined,
    onChange: (event: React.SyntheticEvent<HTMLInputElement>, data: DropdownProps) => void
}

class State extends React.Component<IProps, {}>{
    public render() {
        return <Form.Dropdown
            fluid={true}
            name="state"
            onChange={this.props.onChange}
            label='State'
            value={this.props.value}
            selection={true}
            options={["open", "closed", "all"].map(a => ({
                text: a,
                value: a,
            }))} />;
    }
}

export default State;