import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(3000);

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array

    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <Title>

          <nav class="navbar navbar-expand-lg navbar-light" id="navbarPurple">
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                  <span class="navbar-text">
                    you guessed correctly!
                    </span>
                </li>
                <li class="nav-item">
                  <span class="navbar-text">
                    Score: score!
                    </span>
                </li>
                <li class="nav-item">
                  <span class="navbar-text">
                    Top Score: top score!
                  </span>
                </li>
              </ul>

            </div>
          </nav>

        </Title >
        {
          this.state.friends.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))
        }


        <nav class="navbar navbar-expand-lg navbar-light" id="navbarPurpleBottom">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <span class="navbar-text">
                  Clicky Game. 2019.    </span>
              </li>

            </ul>

          </div>
        </nav>
      </Wrapper >
    );
  }
}

export default App;
