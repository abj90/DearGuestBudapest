import newsApi from "../apis/newsApi";
/*import dataApi from '../apis/dataApi';*/
import { FETCH_TOP_HEADLINES, DRAWER_TOGGLE_CLICK_HANDLER } from "./types";

export const fetchTopHeadlines = () => async dispatch => {
  const response = await newsApi.get("/everything", {
    params: {
      q: "european union"
    }
  });

  dispatch({
    type: FETCH_TOP_HEADLINES,
    payload: response.data.articles
  });
};

/*
const drawerToggleClickHandler = () =>{
	return {
		type: DRAWER_TOGGLE_CLICK_HANDLER,
		payload
	};
}
*/

/*
drawerToggleClickHandler
BackDropClickHandler
*/

/*in case it's needed to9 fetch the data from API
export const fetchHomeData = () => async (dispatch) =>{
	const response = await dataApi.get('/home');

	dispatch({
		type: FETCH_HOME_DATA,
		payload:response.data
	})
}
*/
/* in case it's needed to9 fetch the data from API
export const fetchTourismSectionData = () => async (dispatch) => {
	const response = await dataApi.get('/tourismSection');

	dispatch({
		type: FETCH_TOURISM_DATA,
		payload:response.data
	})
}
*/
