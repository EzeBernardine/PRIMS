import React, { Component } from "react";
import { PrisonsMain } from "../styles/PrisonsStyle";
import Menu from "../features/Menu";
import { Flex } from "../styles/LandingStyles";
import { Query } from "react-apollo";
import { ALL_STAFF } from "./queries";

export default class AllStaffs extends Component {
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

    return (
      <PrisonsMain>
        <Menu menus={menus} />

        <Query query={ALL_STAFF}>
          {({ loading, data }) => {
            if (loading) {
              return <p>Loading..</p>;
            }
            const staffs = data.getAllStaff;
            return (
              <section>
                <aside>
                  <h1>ALL STAFFS</h1>
                  <p>List of all registered staffs </p>
                </aside>
                <Flex gap className="prison">
                  {staffs ? (
                    staffs.map((staff, index) => (
                      <div key={index}>
                        <div className="prisonImg">
                          <img src={require("../image/staff.jpg")} />

                          <div className="prisonDetail">
                            <Flex column>
                              <span> Address : </span>
                              <small>Address</small>
                            </Flex>
                            <Flex column style={{ marginTop: "10px" }}>
                              <span> Local Govt ARea : </span>
                              <small>{staff.lga}</small>
                            </Flex>
                          </div>
                        </div>

                        <footer className="eachPrison" key={index}>
                          <Flex className="" column>
                            <Flex alignCenter className="name">
                              <span>{staff.name}</span>
                              <small>{staff.dateOfBirth}</small>
                            </Flex>
                            <small>
                              <span>Nationality :  </span>
                              <span>{staff.nationality} </span>
                            </small>
                            <Flex className="prisonManager" alignCenter>
                              <span>{staff.position} </span>
                            </Flex>
                          </Flex>
                        </footer>
                      </div>
                    ))
                  ) : (
                    <p>No Staff</p>
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
