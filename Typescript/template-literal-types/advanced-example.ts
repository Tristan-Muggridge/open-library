type TemplateWithCondition<T extends string> = T extends `Hello, ${infer Name}`
  ? `Hi, ${Name}`
  : never;

type Greet = TemplateWithCondition<"Hello, John">; // "Hi, John"