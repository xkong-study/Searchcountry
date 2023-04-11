import React from 'react';
import { shallow } from 'enzyme';
import Autocomplete from '@mui/material/Autocomplete'; // 替换为你的Autocomplete组件的导入路径
import TextField from '@mui/material/TextField'; // 替换为你的TextField组件的导入路径
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { SearchApi } from '../../request/api';

Enzyme.configure({ adapter: new Adapter() });


describe('Autocomplete component', () => {
    let options = ['Ireland', 'France', 'Germany']; // replace with your option list

    it('should render Autocomplete component correctly', () => {
        const wrapper = shallow(
            <Autocomplete
                includeInputInList
                options={options}
                renderInput={(params) => <TextField {...params} label="ENTER COUNTRY" variant="standard" />}
            />
        );

        expect(wrapper).toMatchSnapshot(); // Use snapshot tests to ensure components render correctly
    });

});

jest.mock('../../request/api', () => ({
    SearchApi: jest.fn(() => ([{
        common_name: 'Ireland',
        official_name: 'Republic of Ireland',
        short_name: 'IE',
        capital: ["Dublin"],
        currency: {"EUR": {"name": "Euro", "symbol": "€"}},
        flag: "https://flagcdn.com/w320/ie.png",
        region: "Europe",
        timezone: ["UTC"],
        lng: -8,
        lat: 53
    }]))
}));

test('mock search country api test', () => {
    // Call the simulated SearchApi function
    const result = SearchApi({ params: { name: 'Ireland' } });

    // Assert that the SearchApi function is called
    expect(SearchApi).toHaveBeenCalledTimes(1);

    // Assert the parameters of the SearchApi function
    expect(SearchApi).toHaveBeenCalledWith({ params: { name: 'Ireland' } });

    expect(result).toMatchSnapshot();
});
