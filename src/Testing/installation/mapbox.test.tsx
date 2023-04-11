// 引入必要的测试依赖
import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MyComponent from '../../Component/MyComponent';
import {SearchApi} from "../../request/api"; // 导入待测试的组件

jest.mock('../../request/api', () => ({
    SearchApi: jest.fn(() =>{
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = {name: 'Ireland', lng: -8, lat: 53};
                resolve(result);
            }, 1000); // 示例中延时 1 秒模拟异步操作
        });
    })
}))

describe('MyComponent', () => {
    test('fetches and sets location data', async () => {
        // 渲染待测试的组件
        const { container } = render(<MyComponent />);

        // 断言 SearchApi 函数是否被调用
        expect(SearchApi).toHaveBeenCalledTimes(1);
        expect(SearchApi).toHaveBeenCalledWith({ params: { name: 'Ireland' } });

        // 等待异步操作完成
        await act(async () => {
            await Promise.resolve(); // 等待 Promise.resolve() 的返回值，保证异步操作完成
        });

        // 断言组件状态和渲染结果
        expect(container).toMatchSnapshot();
    });
});
