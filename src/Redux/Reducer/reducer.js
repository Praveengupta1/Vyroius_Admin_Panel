import * as ACTION_TYPE from "../actionType/index";

const initailState = {
  loading: false,
  organization:[],
  users: [],
  ecosystems:[],
  hubs:[],
  stations:[],
  drones:[],
  battery:[],
  payload:[],
  sensor:[],
};

const Reducer = (state = initailState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOADING:
      return { ...state, loading: true };

    case ACTION_TYPE.FETCH_USER_DATA:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case ACTION_TYPE.FETCH_USER_DATA_FAILED:
      return state;
      //ECO
      case ACTION_TYPE.FETCH_ECOSYSTEMS:
        return {
          ...state,
          loading: false,
          ecosystems: action.payload,
        };
      case ACTION_TYPE.FETCH_ECOSYSTEMS_FAILED:
        return state;
        //HUBS
        case ACTION_TYPE.FETCH_HUBS:
          return {
            ...state,
            loading: false,
            hubs: action.payload,
          };
        case ACTION_TYPE.FETCH_HUBS_FALIED:
          return state;
          //STATIONS
        case ACTION_TYPE.FETCH_STATIONS:
          return {
            ...state,
            loading: false,
            stations: action.payload,
          };
        case ACTION_TYPE.FETCH_STATIONS_FAILED:
          return state;
          //DDRONES
        case ACTION_TYPE.FETCH_DRONES:
          return {
            ...state,
            loading: false,
            drones: action.payload,
          };
        case ACTION_TYPE.FETCH_DRONES_FAILED:
          return state;
        //battery
        case ACTION_TYPE.FETCH_BATTERY:
          return {
            ...state,
            loading: false,
            battery: action.payload,
          };
        case ACTION_TYPE.FETCH_BATTERY_FAILED:
          return state;
       
       //paylaod
        case ACTION_TYPE.FETCH_PAYLOAD:
          return {
            ...state,
            loading: false,
            payload: action.payload,
          };
        case ACTION_TYPE.FETCH_PAYLOAD_FAILED:
          return state;
       
         //sensor
        case ACTION_TYPE.FETCH_SEONSOR:
          return {
            ...state,
            loading: false,
            sensor: action.payload,
          };
        case ACTION_TYPE.FETCH_SEONSOR_FAILED:
          return state;
          //ORGA
          case ACTION_TYPE.FETCH_ORGANIZATION:
            return {
              ...state,
              loading: false,
              organization: action.payload,
            };
          case ACTION_TYPE.FETCH_ORGANIZATION_FAILED:
            return state;
            case ACTION_TYPE.ACCEPT_REQUEST:
              console.log("accept index");
              let index=state.organization.findIndex((org)=>{ return org._id === action.payload._id});
              console.log(index);
              let updated =[...state.organization]
             updated[index]=action.payload;
             console.log(action.payload);
              console.log(updated);
              return {
                ...state,
                loading: false,
                organization: updated,
              };
            case ACTION_TYPE.ACCEPT_REQUEST_FAILED:
              return state;
              case ACTION_TYPE.REJECT_REQUEST:
                console.log("reject index");
                 index=state.organization.findIndex((org)=>{return org._id === action.payload._id});
                console.log(index);
                 updated =[...state.organization]
             updated[index]=action.payload;
                return {
                  ...state,
                  loading: false,
                  organization:updated,
                };
              case ACTION_TYPE.REJECT_REQUEST_FAILED:
                return state;
    
          default:
      return state;
  }
};

export default Reducer;
