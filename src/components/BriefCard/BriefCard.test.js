import React from 'react';
import renderer from 'react-test-renderer';
import BriefCard from './BriefCard';

const data = {
    data: [
        { id: 1, name: "Ödeme", numberoftransactions: 1, type: 'uptrend', amount: "100,00" },
        { id: 2, name: "İptal/İade", numberoftransactions: 0, type: 'downgrade', amount: "0,00" },
        { id: 3, name: "Toplam", numberoftransactions: 1, type: 'process', amount: "100,00" },
    ],
}

test('renders correctly', () => {
    const tree = renderer.create(<BriefCard data={data.data} />).toJSON();
    expect(tree).toMatchSnapshot();
});