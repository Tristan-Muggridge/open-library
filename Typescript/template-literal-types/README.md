# Template Literal Types in TypeScript

Template literal types in TypeScript allow you to construct types using string templates. This feature allows you to create more precise and flexible types that can adapt to specific string patterns.

### Key Concepts

- **Basic Template Literal Types**: You can use string literals as types and combine them using templates.
- **Advanced Use Cases**: You can use conditional types, union types, and more to create highly flexible and reusable types.

## Basic Example

You can create a type by combining string literals and placeholders for dynamic content.

```typescript
type Greeting = `Hello, ${string}`;

const greet: Greeting = "Hello, world!"; // Valid
const greetError: Greeting = "Hi, world!"; // Error: Type 'Hi, world!' is not assignable to type 'Hello, ${string}'
```

In this example, the Greeting type can only accept strings that start with "Hello, " followed by any string value.

## Generics Example

Template literal types can also be combined with conditional types, enabling more advanced type manipulation.

```typescript
type TemplateWithCondition<T extends string> = T extends `Hello, ${infer Name}`
  ? `Hi, ${Name}`
  : never;

type Greet = TemplateWithCondition<"Hello, John">; // "Hi, John"
```

TemplateWithCondition is a conditional type that transforms a greeting starting with "Hello, " into a greeting starting with "Hi, " while keeping the name part intact.

## Real-World Example: Route Matching

Template literal types are particularly useful for tasks like route matching or URL generation, where specific patterns need to be enforced.

```typescript
type RoutePattern = `/users/${string}/profile`;

const validUserProfileRoute: RoutePattern = "/users/john_doe/profile"; // valid
const invalidUserProfileRoute: RoutePattern = "/user/john_doe/profile"; // invalid
```

Here, RoutePattern is a type that only accepts paths of the form /users/{username}/profile, where {username} can be any string