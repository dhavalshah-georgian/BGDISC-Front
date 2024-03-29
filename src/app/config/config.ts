export const config = {
    partialUrls: {
        login: '/api/dataset/user/login',

        getDatasetList: '/api/dataset/node.json',
        getSingleDataset: '/api/dataset/node/id'
    },
    sortSelectList: [
        {
            id: 1,
            name: "Title"
        },
        {
            id: 2,
            name: "Date Changed"
        },
        {
            id: 3,
            name: "Date Created"
        }
    ],
    orderSelectList: [
        {
            id: 1,
            name: "Ascending"
        },
        {
            id: 2,
            name: "Descending"
        }
    ]
};