import TestRenderer from 'react-test-renderer';
import { SDKListItem } from '../SDKListItem';

it('renders SDKListItem ', () => {
	const testRenderer = TestRenderer.create(
		<SDKListItem
		  sdkCategory='category'
		  categoryItems={[{name:'name1'}]}
		/>
	);
  expect(testRenderer.toJSON()).toMatchSnapshot()
});

