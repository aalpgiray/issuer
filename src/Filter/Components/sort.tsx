import * as React from 'react';
import { DropdownProps, Form } from "semantic-ui-react";

interface IProps {
    value: string | undefined,
    onChange: (event: React.SyntheticEvent<HTMLInputElement>, data: DropdownProps) => void
}

class Sort extends React.Component<IProps, {}>{
    public render() {
        return <Form.Dropdown
            fluid={true}
            name="sort"
            onChange={this.props.onChange}
            label='Sort'
            value={this.props.value}
            selection={true}
            options={["created", "updated", "comments"].map(a => ({
                text: a,
                value: a,
            }))} />;
    }
}

export default Sort;