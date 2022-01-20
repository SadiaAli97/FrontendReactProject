import TestRenderer from 'react-test-renderer';
import { TableView } from '../TableView';

it('renders TableView ', () => {
	const testRenderer = TestRenderer.create(
		<TableView
		  data={[{
        "id": "1",
        "name": "SDK 1",
        "categories": ["Backend"],
        "firstSeenDate": "2017-11-16T10:48:53.000-08:00",
        "lastSeenDate": "2019-07-16T13:24:39.000-07:00",
        "__typename": "Sdk"
      },]}
		  selectedToggleOption='isdks'
		/>
	);
  expect(testRenderer.toJSON()).toMatchSnapshot()
});

