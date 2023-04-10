import { render, screen } from '@testing-library/react';
import MyComponent from '../../Component/MyComponent';
require('@babel/register');
const MockAdapter = require('axios-mock-adapter');

const axiosOption = {
    baseURL: '/',
    timeout: 1000
}

// @ts-ignore
const instance = axios.create(axiosOption);

describe('api', () => {
    it('should fetch users', async () => {
        // 创建一个 mock adapter 实例
        const mock = new MockAdapter(instance);

        // 模拟一个 GET 请求，并返回预定义的数据
        mock.onGet('/country').reply(200, {
            users: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
        });
        async function getUsers(api) {
            const response = await api.get('/country');
            return response.data.users;
        }
        // 调用 getUsers 方法，并检查返回的数据是否符合预期
        const result = await getUsers(instance);
        expect(result).toEqual([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);

        // 断开 mock adapter 和 axios 实例之间的链接
        mock.restore();
    });
});


// describe('ButtonComponent', () => {
//     it('should render a button with search icon', () => {
//         render(<MyComponent />);
//         const button = screen.getByRole('button');
//         // const icon = screen.getByLabelText('search');
//         expect(button).toBeInTheDocument();
//         // expect(icon).toBeInTheDocument();
//     });
// });
