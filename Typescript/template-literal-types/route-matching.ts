type RoutePattern = `/users/${string}/profile`;

const validUserProfileRoute: RoutePattern = "/users/john_doe/profile"; // valid
const invalidUserProfileRoute: RoutePattern = "/user/john_doe/profile"; // invalid
