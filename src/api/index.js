import axios from "axios";

const _auth = {
    username: 'bruce',
    password: '1234'
};

const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));

class UsersAPI {
    _baseURL = 'https://petstore.subx64.space/api/';

    async getAll() {
        // await delay(3000);
        const result = await axios.get(this._baseURL + 'users', {
            auth: _auth
        }).catch(() => {
            console.error('The server with an external API is not available!');
            return null;
        });

        return result ? result.data : null;
    }

    async add({ firstName, lastName, email, username, password }) {
        await axios.post(this._baseURL + 'users',
            {
                firstName,
                lastName,
                email,
                username,
                password
            }, {
            auth: _auth
        });
    }

    async edit(id, { firstName, lastName, email, username, password }) {
        await axios.put(this._baseURL + 'users/' + id,
            {
                firstName,
                lastName,
                email,
                username,
                password
            }, {
            auth: _auth
        });
    }

    async delete(id) {
        await axios.delete(this._baseURL + 'users/' + id, {
            auth: _auth
        });
    }
}

export {
    UsersAPI
}