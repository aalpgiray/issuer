import { IIssue, IUser } from "./github.types";


interface IGetIssueParameters {
    perPage?: number;
    page?: number;
    milestone?: number | "*";
    state?: "open" | "closed" | "all";
    assignee?: string | "none" | "*";
    creator?: string;
    mentioned?: string;
    labels?: string;
    sort?: "created" | "updated" | "comments";
    direction?: "asc" | "desc";
    since?: string;
    filter?: "assigned" | "created" | "mentioned" | "subscribed" | "all";
}

export async function getIssues({
    assignee,
    creator,
    direction,
    labels,
    mentioned,
    page,
    perPage,
    milestone,
    since,
    sort,
    state,
    filter
}: IGetIssueParameters): Promise<IIssue[]> {
    return await fetch(`https://api.github.com/repos/atom/atom/issues?access_token=41b0c9055478f11dbf03c975dfa29bd0868f5419&
            ${perPage ? `per_page=${perPage}&` : ""}
            ${page ? `page=${page}&` : ""}
            ${state ? `state=${state}&` : ""}
            ${filter ? `filter=${filter}&` : ""}
            ${labels ? `labels=${labels}&` : ""}
            ${sort ? `sort=${sort}&` : ""}
            ${assignee ? `assignee=${assignee}&` : ""}
            ${creator ? `creator=${creator}&` : ""}
            ${direction ? `direction=${direction}&` : ""}
            ${mentioned ? `mentioned=${mentioned}&` : ""}
            ${milestone ? `milestone=${milestone}&` : ""}
            ${since ? `since=${since}&` : ""}
        `.replace(/ /g, ''))
        .then(r => r.json());
}

/**
 * To take all collabrators via this endpoint "/projects/:id/collaborators" you must be admin.
 * 
 * But this fetches all the issues which have a user assined to them then creates a list of distinc users.
 * 
 * Works for now. :)
 * 
 * Note: It only allows me to fetch 100 records per page, so there is a strong chance that we have more contributers.
 */
export async function getUsers(): Promise<IUser[]> {
    return await fetch('https://api.github.com/repos/atom/atom/issues?access_token=41b0c9055478f11dbf03c975dfa29bd0868f5419&per_page=100&assignee=*&state=all')
        .then(r => r.json() as Promise<IIssue[]>)
        .then(assignees =>
            assignees
                .map(a => a.assignees)
                .reduce((a, b) => a.concat(b))
                .filter((value, index, self) => {
                    return self.map(s => s.id).indexOf(value.id) === index;
                }))
}