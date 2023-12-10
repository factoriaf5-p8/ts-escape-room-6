# Typescript Labs

## Lab 6: Constraining Value Types

file: `/src/06-unions.problem.ts`

Earlier we looked at a User that had a boolean isAdmin property.

But what if we had other types of roles?

We wouldn't want to use a freeform string, because there are only a set number of roles that a User could have: admin, user, or super-admin.

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: string;
}
```
Consider this `defaultUser`:

```ts
export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
```
It's being defined with a role that is not one of our options.

Note that the `// @ts-expect-error` comment tells TypeScript that we are expecting there to be an error on the next line.

If there is not an error on the next line down, there will be a red squiggle under `// @ts-expect-error`. If there is an error, the line is happy and there will not be any red.

In our code's current state, we see the red line because the "I_SHOULD_NOT_BE_ALLOWED" is a string as the User interface expects, so there is no error.

Challenge
Update the User interface to restrict the role property to one of the set options.

The I_SHOULD_NOT_BE_ALLOWED role should cause an error, which will remove the red squiggly line from underneath the `// @ts-expect-error` line.