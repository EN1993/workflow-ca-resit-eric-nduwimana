// API url: https://graphqlzero.almansi.me/api

import { orderBy } from "lodash";

import "regenerator-runtime/runtime";

const postsList = document.querySelector(".results-list");

import ApolloClient, { gql } from "apollo-boost";

async function myGQL() {
  const client = new ApolloClient({
    uri: "https://graphqlzero.almansi.me/api",
  });
  const json = await client.query({
    query: gql`
      {
        posts {
          data {
            id
            title
          }
        }
      }
    `,
  });

  const orderedPosts = orderBy(json.data.posts.data, ["id"], ["desc"]);

  let html = "";

  for (let i = 0; i < orderedPosts.length; i++) {
    if (i == 10) {
      break;
    }

    const post = ` <ul class= "list-item">
                      <li> Id: ${orderedPosts[i].id}</li>
                      <li> Title: ${orderedPosts[i].title}</li>     
                    </ul> `;

    html += post;

    postsList.innerHTML = html;
  }
}

myGQL();
