"use strict";
class UserId {
    userID;
    constructor(userID) {
        this.userID = userID;
    }
}
;
const user1 = new UserId("id3225");
console.log(user1.userID);
// user1.userID = "id31223"; // error
