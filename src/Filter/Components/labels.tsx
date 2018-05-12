import * as React from "react";
import { DropdownItemProps, DropdownProps, Form } from "semantic-ui-react";

interface IProps {
    value: string[],
    onChange: (event: React.SyntheticEvent<HTMLInputElement>, data: DropdownProps) => void
}

interface IState {
    labelOptions: DropdownItemProps[];
}

class Labels extends React.Component<IProps, IState>{
    public state = {
        labelOptions: []
    }
    /**
     * Add labels that not exists to the list of selectable options.
     */
    public addLabelOption = (event: React.KeyboardEvent<HTMLElement>, data: DropdownProps) => {
        this.setState({ labelOptions: [...this.state.labelOptions, { value: data.value as string, text: data.value, key: data.value }] })
    }
    public render() {
        return <Form.Dropdown
            onChange={this.props.onChange}
            name="labels"
            value={this.props.value}
            fluid={true}
            label='Labels'
            placeholder='Type Labels To Search'
            multiple={true}
            selection={true}
            search={true}
            allowAdditions={true}
            options={this.state.labelOptions}
            onAddItem={this.addLabelOption} />;
    }
}

export default Labels;