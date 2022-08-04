export interface DatasetList {
    id: number;
    title: string;
    type: string;
    status: string;
    created: number;
    changed: number;
    uri: string;
}

export interface DatasetListAPIResponse {
    nid: string;
    vid: string,
    type: string;
    language: string;
    title: string;
    uid: string;
    status: string;
    created: string;
    changed: string;
    comment: string;
    promote: string;
    sticky: string;
    tnid: string;
    translate: string;
    uuid: string;
    uri: string;
}