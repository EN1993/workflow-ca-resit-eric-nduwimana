// API url: https://graphqlzero.almansi.me/api



const userList = document.querySelector('.results-list');

import ApolloClient, { gql } from 'apollo-boost';

import {orderBy} from 'lodash'

import 'regenerator-runtime/runtime';

async function myGQL() {

  const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api'
  });
  const json = await client.query({ query: gql`
  {
    posts {
      data {
        id
        title
      }
    }
  }
    

  `}).then(console.log);

  const orderedPosts = orderBy(await json.data.posts.data, ["id"], ["desc"]);

    console.log('NEW POST:', orderedPosts);

  


    for (let i = 0; i < orderedPosts.length; i++) {



      if (i === 5) {
        break;
      }
      
      // console.log('NEW POST:', orderedPosts);


    }


  }

myGQL()
  

 

