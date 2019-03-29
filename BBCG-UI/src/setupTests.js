/*
 eslint-disable import/no-extraneous-dependencies
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
/*
eslint-enable
*/
configure({ adapter: new Adapter() });
