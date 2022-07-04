import { VisibilityFiltersEnum } from '../../constants/VisibilityFiltersEnum';

export const visibilityReducer = (state = VisibilityFiltersEnum.All, action) => {
    switch(action.type){
        case "TODO_CHANGE_VIEW":
            return action.status;
        default:
            return state;
    }
};