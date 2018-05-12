import * as React from 'react';
import { DropdownProps, Form } from "semantic-ui-react";

interface IProps {
    value: string | undefined,
    onChange: (event: React.SyntheticEvent<HTMLInputElement>, data: DropdownProps) => void
}

class Directions extends React.Component<IProps, {}>{
    public render() {
        return <Form.Dropdown
            fluid={true}
            name="direction"
            onChange={this.props.onChange}
            label='Sort Direction'
            value={this.props.value}
            selection={true}
            options={["asc", "desc"].map(a => ({
                text: a,
                value: a,
            }))} />;
    }
}

export default Directions;