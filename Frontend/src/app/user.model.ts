export class UserModel {
    constructor(
        public _id: String,
        public firstName: String,
        public lastName: String,
        public email: String,
        public password: String,
        public phone: String,
        public address: String
    ) { }
}