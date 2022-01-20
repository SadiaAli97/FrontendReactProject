import TestRenderer from 'react-test-renderer';
import { ToggleOptions } from '../ToggleOptions';

it('renders ToggleOptions ', () => {
	const testRenderer = TestRenderer.create(
		<ToggleOptions
		  selectedToggle='isdks'
		  toggleChange={jest.fn()}
		/>
	);
  expect(testRenderer.toJSON()).toMatchSnapshot()
});

