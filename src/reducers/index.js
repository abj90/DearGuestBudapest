import { combineReducers } from "redux";
import { homeData, tourismSectionData, expatSectionData } from "./data";
import newsReducer from "./newsReducer";
import _ from "lodash";

const homeDataReducer = () => {
  return _.mapKeys(homeData, "compName");
};

const tourismSectionDataReducer = () => {
  return _.mapKeys(tourismSectionData, "compName");
};

const expatSectionDataReducer = () => {
  return _.mapKeys(expatSectionData, "compName");
};

export default combineReducers({
  homeData: homeDataReducer,
  tourismSectionData: tourismSectionDataReducer,
  expatSectionData: expatSectionDataReducer,
  news: newsReducer
});

/*import _ from 'lodash';
import { FETCH_TOURISM_DATA} from '../actions/types';

export default (state = null, action) =>{
	switch(action.type){
		case FETCH_TOURISM_DATA:
			//we are converting array into an object
			return {...state, ..._.mapKeys(action.payload,'compName')}
		default:
			return state;
	}
}
*/

/* in case it's need to get the data from API 
import _ from 'lodash';
import { FETCH_HOME_DATA} from '../actions/types';

export default (state = null, action) =>{
	switch(action.type){
		case FETCH_HOME_DATA:
			//we are converting array into an object
			return {...state, ..._.mapKeys(action.payload,'compName')}
		default:
			return state;
	}
}
*/
