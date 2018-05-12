import * as React from 'react';
import { Button, DropdownProps, Form, InputOnChangeData, InputProps } from "semantic-ui-react";
import FilterObject, { IFilter } from './FilterObject';

interface IFilterState {
    filter: IFilter
}

interface IFilterParameter {
    name: string,
    type?: string,
    InputElement?: React.ComponentClass<InputProps>
}

interface IFilterProp {
    filters: IFilterParameter[]
    onChange?: (filter: IFilter) => void
}

class Filter extends React.Component<IFilterProp, IFilterState> {
    public state = {
        filter: new FilterObject,
    }
    public submit = () => {
        if (this.props.onChange) {
            this.props.onChange(this.state.filter);
        }
    }
    public handleChange = (event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData | DropdownProps) => {
        this.setState({ filter: { ...this.state.filter, [data.name]: data.value } })
    }
    public renderFilterElements = () => {
        const elements = this.props.filters.map(E => {
            if (E.InputElement) {
                return <E.InputElement onChange={this.handleChange} value={this.state.filter[E.name]} key={E.name} />
            }
            return <Form.Input type={E.type ? E.type : "text"} label={E.name} onChange={this.handleChange} name={E.name} value={this.state.filter[E.name]} key={E.name} />
        });

        const groupedElements: JSX.Element[][] = [];

        
        // this groups items in groups with two members to later crete "Form.Groups" for better usage of space.
        while (elements.length > 0) {
            groupedElements.push(elements.splice(0, 2))
        }

        return groupedElements.map((e, i) => {
            return <Form.Group widths="equal" key={i}>
                {e}
            </Form.Group>
        })
    }
    public render() {
        return <Form inverted={true}>
            {this.renderFilterElements()}
            <Button onClick={this.submit} type='submit'>Apply Filter</Button>
        </Form>
    }
}

export default Filter;