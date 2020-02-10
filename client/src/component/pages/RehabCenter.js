import React, { Component } from "react";
import { PrisonsMain } from "../styles/PrisonsStyle";
import { RehabMain } from "../styles/RehabCenterStyles";
import Menu from "../features/Menu";
import { Flex } from "../styles/LandingStyles";
import { Button } from "../styles/ButtonStyles";
import { IoIosAdd, IoMdClose } from "react-icons/io";
import Modal from "../features/Modal";
import { Query, Mutation } from "react-apollo";
import {
  GET_ALL_REHABS,
  ACCEPT_REHAB,
  GET_ACCEPTED_REHAB
} from "../pages/queries";

export default class RehabCenter extends Component {
  state = {
    addRehab: undefined,
    show: false
  };

  showModal = () => {
    console.log("this.state.show");
    console.log(this.state.show);
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  displayRehab = () => {
    this.setState({ show: true });
  };

  render() {
    let menus = [
      {
        name: "PRISONERS",
        to: "/allprisoners"
      },
      {
        name: "PROFILE",
        to: "/profile"
      }
    ];
    let prisons = JSON.parse(localStorage.getItem("prisons"));
    let rehab = JSON.parse(localStorage.getItem("rehab"));

    // prisonName, prisonManager, mdImage,  prisonState, prisonLGA, prisonDetail, prisonImage

    return (
      <PrisonsMain>
        <Menu menus={menus} />

        <Query query={GET_ACCEPTED_REHAB}>
          {({ loading, data }) => {
            if (loading) return <p>Loading...</p>;
            const accept = data.acceptedRehab;
            console.log('accepta', accept)
            return (
              <section>
                <aside>
                  <h1>ALL REHAB CENTERS</h1>
                  <p>List of all Nigeria prisons</p>
                </aside>
                <Flex gap className="prison">
                  {accept ? (
                    accept.map((item, index) => (
                      <div key={index}>
                        <div className="prisonImg">
                          <img src={require("../image/rehab.jpg")} />

                          <div className="prisonDetail">
                            <Flex column>
                              <span>
                                {item.rehabDetail && " More Details :"}{" "}
                              </span>
                              <small>{item.rehabDetail}</small>
                            </Flex>
                          </div>
                        </div>

                        {/* {50 >= 50 && (
                          <Flex alignCenter justifyCenter className="full">
                            Full
                          </Flex>
                        )} */}

                        <footer className="eachPrison" key={index}>
                          <Flex className="all" column>
                            <Flex alignCenter className="name">
                              <span>{item.rehabCenter}</span>
                              <small>50</small>
                            </Flex>
                            <small>
                              <span>State: </span>
                              <span>{item.rehabState} </span>
                            </small>
                            <small>
                              <span>LGA: </span>
                              <span> {item.rehabLGA} </span>
                            </small>
                            <Flex className="prisonManager" alignCenter>
                              <span>Prison Manager: </span>
                              <div className="mdname">
                                {item.rehabManager}
                                <Flex
                                  className="mdImg"
                                  alignCenter
                                  justifyCenter
                                >
                                  <img src={require("../image/6.jpeg")} />
                                  <small>{item.rehabManagerPhone}</small>
                                </Flex>
                              </div>
                            </Flex>
                            <Flex className="prisonManager" alignCenter>
                              <div className="mdname">
                                {item.tag}
                              </div>
                            </Flex>
                          </Flex>
                        </footer>
                      </div>
                    ))
                  ) : (
                    <p>No Rehab Center</p>
                  )}
                </Flex>
              </section>
            );
          }}
        </Query>

        <Query query={GET_ALL_REHABS}>
          {({ loading, data }) => {
            if (loading) {
              return <p>loading..</p>;
            }

            const rehabs = data.getRehabCenters;
            // console.log(rehabs._id);

            return (
              <RehabMain>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                  <header>
                    <h1>SELECT REHAB CENTERS </h1>
                    <span onClick={this.hideModal}>
                      <IoMdClose />
                    </span>
                  </header>
                  <div>
                    {rehabs
                      ? rehabs.map((rehab, index) => (
                          <Flex key={index}>
                            <div className="rehabImgs">
                              <img src={require("../image/rehab.jpg")} />
                            </div>
                            <Flex className="rehabDetail" column>
                              <h1>{rehab.rehabCenter}</h1>
                              <Flex alignCenter>
                                <div>
                                  <p>
                                    <small>State: </small>
                                    <small>{rehab.rehabState}</small>
                                  </p>
                                  <p>
                                    <small>LGA: </small>
                                    <small>{rehab.rehabLGA}</small>
                                    {/* {console.log("id=========>", rehab._id)} */}
                                  </p>
                                </div>
                                <Flex alignCenter className="accDecBtns">
                                  <Mutation
                                    mutation={ACCEPT_REHAB}
                                    refetchQueries={() => [
                                      { query: GET_ALL_REHABS }
                                    ]}
                                    awaitRefetchQueries={true}
                                  >
                                    {acceptRehab => {
                                      return (
                                        <Button
                                          SM
                                          RGreen
                                          onClick={async e => {
                                            await acceptRehab({
                                              variables: {
                                                id: rehab._id
                                              }
                                            }).then(res => {
                                              console.log(res);
                                            });
                                          }}
                                        >
                                          {" "}
                                          Accept
                                        </Button>
                                      );
                                    }}
                                  </Mutation>
                                  <Button SM> Decline</Button>
                                </Flex>
                              </Flex>
                            </Flex>
                          </Flex>
                        ))
                      : "No rehab Center"}
                  </div>
                </Modal>

                <Button className="addBtn" onClick={this.displayRehab}>
                  <IoIosAdd />
                </Button>
              </RehabMain>
            );
          }}
        </Query>
      </PrisonsMain>
    );
  }
}
