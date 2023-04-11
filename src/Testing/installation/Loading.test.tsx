import ActionAreaCard from "../../Component/card";
import {render,screen} from "@testing-library/react";
import React from "react";
import BallLoader from '../../Component/Loading';

describe('BallLoader', () => {
    it('renders the BallLoader component correctly', () => {
        const { getByTestId } = render(<BallLoader />);
        // 使用 getByTestId 方法获取测试组件中的元素
        const ballLoader = getByTestId('ball-loader');
        const balls = getByTestId('ball-loader').querySelectorAll('.ball');

        // 断言组件的存在和样式类名
        expect(ballLoader).toBeInTheDocument();
        expect(ballLoader).toHaveClass('ball-loader');

        // 断言子元素的数量
        expect(balls.length).toBe(3);
    });
});


describe('ButtonComponent', () => {
    it('should render a button with search icon', () => {
        render(<ActionAreaCard />);
        const button = screen.getByRole('img');
        expect(button).toBeInTheDocument();
    });
});
