import { IIssue, IUser } from "./github.types";

export async function getIssues(): Promise<IIssue[]> {
    return await fetch('https://api.github.com/repos/atom/atom/issues?per_page=100&page=1&state=all&filter=all&labels=uncaught-exception&sort=created&direction=desc&since=2000-01-01T00:00:00Z')
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
    return await fetch('https://api.github.com/repos/atom/atom/issues?per_page=100&assignee=*&state=all')
        .then(r => r.json() as Promise<IIssue[]>)
        .then(assignees =>
            assignees
                .map(a => a.assignees)
                .reduce((a, b) => a.concat(b))
                .filter((value, index, self) => {
                    return self.map(s => s.id).indexOf(value.id) === index;
                }))
}