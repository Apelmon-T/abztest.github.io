import React from "react";
import { connect } from "react-redux";
import {
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setPositions,
  setShowMore,
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users/Users";
import Registration from "./Registration/Registration";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.users);
      });

    axios
      .get("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then((response) => {
        this.props.setPositions(response.data.positions);
      });
  }

  showMore = async () => {
    const { currentPage, pageSize, setShowMore } = this.props;
    await axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${currentPage}&count=${
          pageSize + 6
        }`
      )
      .then((response) => {
        this.props.setUsers(response.data.users);
      });
    let previous = pageSize + 6;
    setShowMore(previous);
  };

  render() {
    const {
      users,
      totalUsersCount,
      pageSize,
      currentPage,
      positions,
    } = this.props;

    return (
      <div>
        <Users
          users={users}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          showMore={this.showMore}
        />
        <Registration positions={positions} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    positions: state.usersPage.positions,
  };
};

export default connect(mapStateToProps, {
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setShowMore,
  setPositions,
})(UsersContainer);
