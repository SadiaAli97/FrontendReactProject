import TestRenderer from 'react-test-renderer';
import { Header } from '../Header';

it('renders Header ', () => {
	const testRenderer = TestRenderer.create(
		<Header
		  heading='testheading'
		  subheading='testsubheading'
		  count='7'
		/>
	);
  expect(testRenderer.toJSON()).toMatchSnapshot()
});

