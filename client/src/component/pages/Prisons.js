import React, { Component } from "react";
import { PrisonsMain } from "../styles/PrisonsStyle";
import Menu from "../features/Menu";
import { Flex } from "../styles/LandingStyles";
import { Query } from "react-apollo";
import { ALL_PRISONS } from "./queries";

export default class Prisons extends Component {
  state = {
    token: ""
  };

  async componentDidMount() {
    const getToken = await localStorage.getItem("token");
    this.setState({
      token: getToken
    });
  }

  render() {
    const { token } = this.state;
    let menus = [
      {
        name: "PRISONERS",
        to: "/allprisoners"
      },
      {
        name: token != null ? "PROFILE" : "HOME",
        to: token != null ? "/profile" : "/"
      }
    ];
    let prisons = JSON.parse(localStorage.getItem("prisons"));

    // prisonName, prisonManager, mdImage,  prisonState, prisonLGA, prisonDetail, prisonImage

    return (
      <PrisonsMain>
        <Menu menus={menus} />
        <Query query={ALL_PRISONS}>
          {({ loading, data}) => {
            if (loading) {
              return <p>loading..</p>;
            }

            // if (error) {
            //   throw new Error(error);
            // }

            const prisons = data.getPrisons;
            console.log("Prisons", prisons)
            return (
              <section>
                <aside>
                  <h1>ALL PRISONS</h1>
                  <p>List of all Nigeria prisons</p>
                </aside>
                <Flex gap className="prison">
                  {prisons ? (
                    prisons.map((prison, index) => (
                      <div key={index}>
                        <div className="prisonImg">
                          <img src={require("../image/prison.jpg")} />

                          <div className="prisonDetail">
                            <Flex column>
                              <span>
                                {prison.prisonDetail && " More Details :"}{" "}
                              </span>
                              <small>{prison.prisonDetail}</small>
                            </Flex>
                          </div>
                        </div>

                        {/* {50 + */}

                        <footer className="eachPrison" key={index}>
                          <Flex className="" column>
                            <Flex alignCenter className="name">
                              <span>{prison.prisonName}</span>
                              <small>50</small>
                            </Flex>
                            <small>
                              <span>State: </span>
                              <span>{prison.prisonState} </span>
                            </small>
                            <small>
                              <span>LGA: </span>
                              <span> {prison.prisonLGA} </span>
                            </small>
                            <Flex className="prisonManager" alignCenter>
                              <span>Prison Manager: </span>
                              <div className="mdname">
                                {prison.prisonManager}
                                <Flex
                                  className="mdImg"
                                  alignCenter
                                  justifyCenter
                                >
                                  <img src={require("../image/6.jpeg")} />
                                  <small>{prison.prisonManagerPhone}</small>
                                </Flex>
                              </div>
                            </Flex>
                          </Flex>
                        </footer>
                      </div>
                    ))
                  ) : (
                    <p>No Prison</p>
                  )}
                </Flex>
              </section>
            );
          }}
        </Query>
      </PrisonsMain>
    );
  }
}
