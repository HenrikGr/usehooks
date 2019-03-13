/**
 * @prettier
 * @description: Jest configuration
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() })
