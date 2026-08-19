class UserId{
    readonly userID: string;

    constructor(userID: string){
        this.userID = userID;
    }
};

const user1 = new UserId("id3225");

console.log(user1.userID);

// id3225

// user1.userID = "id31223"; // error