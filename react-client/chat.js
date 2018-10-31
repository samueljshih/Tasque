// import { applyMiddleware, createStore } from 'redux';
// import axios from 'axios';

// const accessToken = '695d0edfee3e4a208d4eae6098cbb538';

// // REDUX
// const ON_MESSAGE = 'ON_MESSAGE';

// export const sendMessage = (text, sender = 'user') => ({
//   type: ON_MESSAGE,
//   payload: {
//     text: text,
//     sender: sender
//   }
// });

// const messageMiddleware = () => next => action => {
//   next(action);

//   if (action.type === ON_MESSAGE) {
//     const { text } = action.payload;
//     console.log('USER TEXT', text);
//     axios
//       .get('https://api.api.ai/v1/query?', {
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//           Authorization: 'Bearer ' + accessToken
//         },
//         params: {
//           v: '20150910',
//           query: text,
//           lang: 'en',
//           sessionId: '12322'
//         }
//       })
//       .then(response => {
//         console.log('Response', response.data.result.fulfillment.speech);
//       })
//       .catch(error => {
//         console.log('Error', error);
//       });

//     function onSuccess(response) {
//       console.log('RESPONSE', response);
//       const {
//         queryResult: { fulfillmentText }
//       } = response;
//       next(sendMessage(fulfillmentText, 'bot'));
//     }
//   }
// };

// const initState = [
//   {
//     text: ''
//   }
// ];

// // Reducer
// const messageReducer = (state = initState, action) => {
//   switch (action.type) {
//     case ON_MESSAGE:
//       // Add the action payload to the array
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export const store = createStore(
//   messageReducer,
//   applyMiddleware(messageMiddleware)
// );
