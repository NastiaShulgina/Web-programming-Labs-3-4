const BASE_URL = 'https://localhost:5001/api';
const RESOURCE_URL = `${BASE_URL}/Tree`;

const baseRequest = async ({urlPass = "", method = 'GET', body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                'Content-type': 'application/json'
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body)
        }

        return await fetch (`${RESOURCE_URL}${urlPass}`, reqParams)

    } catch (error) {

    }
}

export const getAllTrees = async () => {
    const rawRes = await baseRequest ({method: 'GET' });
    return rawRes.json();
}

export const postTree = (body) => baseRequest ({ method: 'POST', body });

export const editTree = (id, body) => baseRequest ({ urlPass: `/${id}`, method: 'PUT', body});

export const deleteTree = (id) => baseRequest ({ urlPass: `/${id}`, method: 'DELETE'});
