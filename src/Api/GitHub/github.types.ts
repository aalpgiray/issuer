export interface IUser {
    "login": string,
    "id": number,
    "avatar_url": string,
    "gravatar_id": string,
    "url": string,
    "html_url": string,
    "followers_url": string,
    "following_url": string,
    "gists_url": string,
    "starred_url": string,
    "subscriptions_url": string,
    "organizations_url": string,
    "repos_url": string,
    "events_url": string,
    "received_events_url": string,
    "type": string,
    "site_admin": boolean
}

export interface IIssue {
    "url": string,
    "repository_url": string,
    "labels_url": string,
    "comments_url": string,
    "events_url": string,
    "html_url": string,
    "id": number,
    "number": number,
    "title": "Dock Bug: Crossing dock toggle with drag and drop breaks dock positioning",
    "user": IUser,
    "labels": [
        {
            "id": number,
            "url": string,
            "name": string,
            "color": string,
            "default": boolean
        },
        {
            "id": number,
            "url": string,
            "name": string,
            "color": string,
            "default": boolean
        }
    ],
    "state": string,
    "locked": boolean,
    "assignee": IUser,
    "assignees": IUser[],
    "milestone": null,
    "comments": number,
    "created_at": Date,
    "updated_at": Date,
    "closed_at": null,
    "author_association": string,
    "body": string
}