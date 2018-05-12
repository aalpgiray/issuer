export interface IFilter {
    [key: string]: any;
    milestone?: number | "*";
    state?: "open" | "closed" | "all";
    assignee?: string | "none" | "*";
    creator?: string;
    mentioned?: string;
    labels: string[];
    sort?: "created" | "updated" | "comments";
    direction?: "asc" | "desc";
    since: string;
    filter?: "assigned" | "created" | "mentioned" | "subscribed" | "all";
}

class FilterObject implements IFilter {
    [key: string]: any;
    public milestone?: number | "*" | undefined;
    public state?: "open" | "closed" | "all" | undefined = "open";
    public assignee?: string | undefined;
    public creator?: string | undefined;
    public mentioned?: string | undefined;
    public labels: string[] = [];
    public sort?: "created" | "updated" | "comments" | undefined = "created";
    public direction?: "asc" | "desc" | undefined = "desc";
    public since: string;
    public filter?: "all" | "created" | "assigned" | "mentioned" | "subscribed" | undefined;
}

export default FilterObject;