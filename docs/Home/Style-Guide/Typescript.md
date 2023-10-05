[[_TOC_]]

# 1. Types

## `1.1:` Prefer types over interfaces when declaring types:

✅ Yes

```ts
type IssueSummaryProps = Readonly<{
    issueId: string;
    includeTaskCount?: boolean;
}>;
```

❌ No

```ts
interface IssueSummaryProps {
    issueId: string;
    includeTaskCount?: boolean;
}
```

## `1.2:` Prefer immutable (readonly) types:

✅ Yes

```ts
type IssueSummaryProps = Readonly<{
    issueId: string;
    includeTaskCount?: boolean;
}>;
```

❌ No

```ts
type IssueSummaryProps = {
    issueId: string;
    includeTaskCount?: boolean;
};
```

## `1.3:` Type arrays with bracket notation:

✅ Yes

```ts
type SupervisorProps = Readonly<{
    employees: Employee[];
}>;
```

✅ Yes

```ts
const [employees, setEmployees] = useState<Employee[]>([]);
```

❌ No

```ts
type SupervisorProps = Readonly<{
    employees: Array<Employee>;
}>;
```

## `1.4:` Prefer union types over enums:

✅ Yes

```ts
export type ChartCurveType = 'linear' | 'curveMonotoneX';
```

❌ No

```ts
export enum ChartCurveType {
    linear,
    curveMonotoneX,
}
```

## `1.5:` Use enums to associate names and values:

✅ Yes

```ts
export enum Colors {
    PrimaryText = '#273750',
    SecondaryText = '#6c7c97',
}
```

✅ Yes

```ts
export enum DayOfWeek {
    Sunday = 1,
    Monday = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thursday = 5,
    Friday = 6,
    Saturday = 7,
}
```

## `1.6:` Do not cast or coerce values unless providing needed context:

✅ Yes

```ts
const box: Box = { length: 10, width: 20 };
```

✅ Yes

```ts
const [things, setThings] = useState([] as string[]);

// NOTE: can also be accomplished by supplying generic type
const [things, setThings] = useState<string[]>([]);
```

❌ No

```ts
const box = value as unknown as Box;
```

❌ No

```ts
const box = { length: 10, width: 20 } as Box;
```

❌ No

```ts
const box = (Box){ length: 10, width: 20 };
```

## `1.7:` Do not use `any` type:

❌ No

```ts
const value: any = 'some value';
```

❌ No

```ts
function doWork(value: any) {
    // ...
}
```

## `1.8:` Only use `unknown` in type guard functions:

✅ Yes

```ts
type Point = { x: number; y: number };

function isPoint(value: unknown): value is Point {
    return (
        !!value &&
        typeof value === 'object' &&
        'x' in value &&
        typeof value.x === 'number' &&
        'y' in value &&
        typeof value.y === 'number'
    );
}
```

❌ No

```ts
function doWork(value: unknown) {
    // ...
}
```

❌ No

```ts
const value: unknown = 'some value';
```

## `1.9:` Prefer `undefined` over `null`:

✅ Yes

```ts
type UserDisplayProps = {
    name: string;
    role?: UserRoleType;
};
```

❌ No

```ts
type UserDisplayProps = {
    name: string;
    role: UserRoleType | null;
};
```

✅ Yes

```ts
function findSpecialNode(nodes: Node[]): Node | undefined {
    // ..
}
```

❌ No

```ts
function findSpecialNode(nodes: Node[]): Node | null {
    // ..
}
```

## `1.10:` Provide default values to optional properties:

```ts
type UserDisplayProps = {
    firstName: string;
    lastName: string;
    supervisor?: SupervisorInfo;
    isAdmin?: boolean;
};

function UserDisplay({
    firstName,
    lastName,
    supervisor = undefined,
    isAdmin = false,
}: UserDisplayProps) {
    // ..
}
```

# 2. Variables

## `2.1:` Prefer `const` over `var` or `let` to prevent unwanted mutation:

✅ Yes

```ts
const someValue = 10;
```

❌ No

```ts
let someValue = 10;
```

❌ No

```ts
var someValue = 10;
```

## `2.2:` Use descriptive names for variables/parameters:

✅ Yes

```ts
const issueCounts = useIssueCounts();
```

✅ Yes

```ts
const activeEmployees = employees.filter((employee) => employee.isActive);
```

❌ No

```ts
const value = useIssueCounts();
```

❌ No

```ts
const activeEmployees = employees.filter((e) => e.isActive);
```

# 3. Operators

## `3.1` Use '===' instead of '==' to prevent unwanted casting:

✅ Yes

```ts
function thingsAreEqual(thing1: number | string, thing2: number | string) {
    return thing1 === thing2;
}
```

❌ No

```ts
function thingsAreEqual(thing1: number | string, thing2: number | string) {
    return thing1 == thing2; // may cast thing2
}
```

## `3.2:` Do not use truthy/falsy logic when dealing with numbers:

✅ Yes

```ts
function validateValue(value: number | undefined) {
    if (value === undefined) {
        return 'Value is required';
    }
    // ...
}
```

❌ No

```ts
function validateValue(value: number | undefined) {
    // Will fail validation if value = 0
    if (!value) {
        return 'Value is required';
    }
    // ...
}
```

✅ Yes

```ts
if (array.length > 0) {
    // do something
}
```

❌ No

```ts
if (array.length) {
    // do something
}
```

# 4.0 Objects

## `4.1:` Use spread operator instead of `Object.assign`:

✅ Yes

```ts
const combinedThings = { ...thing1, ...thing2, newProp: 1 };
```

❌ No

```ts
const combinedThings = Object.assign({}, thing1, thing2, { newProp: 1 });
```

## `4.2:` Use object destructuring when appropriate:

✅ Yes

```ts
const { firstName, lastName } = person;
```

✅ Yes

```ts
function PersonDisplay({ firstName, lastName }: PersonProps) {
    // ...
}
```

❌ No

```ts
const firstName = person.firstName;
const lastName = person.lastName;
```

❌ No

```ts
function PersonDisplay(props: PersonProps) {
    const firstName = props.firstName;
    const lastName = props.lastName;

    // ...
}
```

# 5. Functions

## `5.1:` Use descriptive names for functions and parameters:

✅ Yes

```ts
function getActiveEmployees(employees: Employee[]) {
    // ...
}
```

✅ Yes

```ts
type GetActiveEmployeesOptions = {
    employees: Employee[];
    includeSupervisors: boolean;
};

function getActiveEmployees({
    employees,
    includeSupervisors,
}: GetActiveEmployeesOptions) {
    // ...
}
```

❌ No

```ts
// The function of the function is unclear
function filterEmployees(value: Employee[]) {
    // ...
}
```

## `5.2:` Use arrow functions for callbacks:

✅ Yes

```ts
const doubled = [1, 2, 3].map((num) => num * 2);
```

❌ No

```ts
const doubled = [1, 2, 3].map(function (num) {
    return num * 2;
});
```

## `5.3:` Use an object when returning multiple values (excluding collections):

✅ Yes

```ts
function getPoint() {
    return { x: 0, y: 0 };
}
```

✅ Yes

```ts
// returns a collection of points
function getPoints() {
    return [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: 10, y: 10 },
        { x: 0, y: 10 },
    ];
}
```

❌ No

```ts
function getPoint() {
    return [0, 0];
}
```

# 6. Arrays

## `6.1:` Favor functional looping methods `map`, `filter`, `reduce`, `forEach`, etc. over imperative ones (`for`, `do`, `while`):

✅ Yes

```ts
const getNodeNameList = (nodes: Node[]) => {
    return nodes.map((node) => node.name);
};
```

❌ No

```ts
const getNodeNameList = (nodes: Node[]) => {
    const names: string[] = [];

    for (let node of nodes) {
        names.push(node.name);
    }

    return names;
};
```

✅ Yes

```ts
const getActiveNodes = (nodes: Node[]) => {
    return nodes.filter((node) => node.isActive);
};
```

❌ No

```ts
const getActiveNodes = (nodes: Node[]) => {
    const activeNodes: string[] = [];

    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.isActive) {
            activeNodes.push(node);
        }
    }

    return activeNodes;
};
```

## `6.2:` Use spread operator to copy array:

✅ Yes

```ts
const copy = [...things, anotherThing];
```

❌ No

```ts
const copy = things.slice(0);
copy.push(anotherThing);
```

## `6.3:` Use array destructuring when appropriate:

```ts
const [value, setValue] = useState('value');
const [first, ...rest] = nodeList;
```

# 7. Control/Flow

## `7.1:` Use ternary (`?`) for simple `if`/`else`:

✅ Yes

```ts
const getActiveStatus = (node: Node) => {
    return node.isActive ? 'Active' : 'Inactive';
};
```

❌ No

```ts
const getFormattedNode = (node: Node) => {
    if (node.isActive) {
        return 'Active';
    } else {
        return 'Inactive';
    }
};
```

## `7.2:` Handle all switch cases explicitly and use a default case to handle an invalid or unsupported state:

✅ Yes

```ts
type ActionType = 'add' | 'edit' | 'delete';

switch (action.type) {
    case 'add':
        // handle add
        handleAdd(action);
        break;
    case 'edit':
    case 'delete':
        handleEditOrDelete(action);
        break;
    default:
        throw new Error('Invalid type);
}

```

✅ Yes

```ts
type ShapeType = 'arrow' | 'circle' | 'rectangle';

switch (shape.type) {
    case 'arrow':
        return <Arrow info={shape} />;
    case 'circle':
        return <Circle info={shape} />;
    case 'rectangle':
        return <Rectangle info={shape} />;
    default:
        return <></>;
}
```

❌ No

```ts
type ActionType = 'add' | 'edit' | 'delete';

switch (action.type) {
    case 'add':
        handleAdd();
        break;
    default:
        handleEditOrDelete();
}
```

# 8. Functional Style

## `8.1:` Favor immutability over mutation:

✅ Yes

```ts
const compareValues = (x1: number, x2: number) => {
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
};
```

❌ No

```ts
const compareValues = (x1: number, x2: number) => {
    let result = 0;
    if (x1 < x2) {
        result = -1;
    } else if (x1 > x2) {
        result = 1;
    }
    return result;
};
```

✅ Yes

```ts
const getTotalNodeCount = (nodeGroups: NodeGroup[]) => {
    return nodeGroups.reduce((sum, nodeGroup) => sum + nodeGroup.nodes.length, 0);
};
```

❌ No

```ts
const getTotalNodeCount = (nodeGroups: NodeGroup[]) => {
    let total = 0;

    for (let nodeGroup of nodeGroups) {
        total += nodeGroup.nodes.length;
    }

    return total;
};
```

✅ Yes

```ts
const printNumbers = (numbers: number[]) => {
    numbers.forEach((num) => console.log(num));
};
```

❌ No

```ts
const printNumbers = (numbers: number[]) => {
    let i = 0;
    let n = numbers.length;

    while (i < n) {
        console.log(numbers[i]);
        i += 1;
    }
};
```

## `8.2:` Use string interpolation instead of concatenation:

✅ Yes

```ts
const getFormattedNode = (node: Node) => {
    const status = node.isActive ? '(active)' : '(inactive)';
    return `${node.name}: ${node.serialNumber} ${status}`;
};
```

❌ No

```ts
const getFormattedNode = (node: Node) => {
    let result = node.name;
    result += ': ' + node.serialNumber;

    if (node.isActive) {
        result += ' (active)';
    } else {
        result += ' (inactive)';
    }

    return result;
};
```

# 9. Comments

## `9.1:` Favor self documenting code and reserve comments for non-trivial code.

✅ Yes

```ts
function NodeDisplay({ nodeId }: NodeDisplayProps) {
    const node = useNode(nodeId);
    const nodeDisplayName = node ? getNodeDisplayName(node) : undefined;

    return nodeDisplayName ? <Text>{nodeDisplayName}</Text> : <LoadingSpinner />;
}
```

✅ Yes

```ts
function polarToRectangular(angleInRadians: number, radius: number) {
    // https://en.wikipedia.org/wiki/Polar_coordinate_system
    return {
        x: Math.cos(angleInRadians) * radius,
        // Flip the y because the origin is the top left of screen
        y: Math.sin(-angleInRadians) * radius,
    };
}
```

❌ No

```ts
function NodeDisplay({ nodeId }: NodeDisplayProps) {
    const node = useNode(nodeId);
    // Variable name is unclear
    // Format is ambiguous
    const value = node ? format(node) : undefined;

    return value ? <Text>{value}</Text> : <LoadingSpinner />;
}
```

❌ No

```ts
// Function name is ambiguous
// Parameters "angle" and "amount" are ambiguous
function convert(angle: number, amount: number) {
    // No explanation of formula
    return {
        x: Math.cos(angle) * amount,
        // Why negating the angle here?
        y: Math.sin(-angle) * amount,
    };
}
```

## `9.2:` Use [JS Doc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) to explain types, helper functions and utilities (include the parameters, returned value and example usages)

✅ Yes

```ts
/**
 * Checks to see if the supplied array includes all supplied items
 * @param array The array
 * @param items The items to check for
 * @returns True if the array contains all supplied items, false otherwise
 * @example
 * arrayIncludesAll([1, 3, 2, 4, 5], [1, 2]) // true
 * arrayIncludesAll([1, 3, 2, 4], [1, 2, 6]) // false
 */
export function arrayIncludesAll<TItem>(array: TItem[], items: TItem[]) {
    return items.every((item) => array.includes(item));
}
```

✅ Yes

````ts
/**
 * Type for creating a readonly lookup object.
 * @param TKey Type for property keys
 * @param TValue Type for property values
 * @returns Readonly object type whose property keys are `TKey` and property values are `TValue`
 * @example
 * ```ts
 * export type Thing = 'foo' | 'bar' | 'baz';
 *
 * export const formattedThings: Lookup<Thing, string> = {
 *     foo: 'Foo',
 *     bar: 'Bar',
 *     baz: 'Baz',
 * };
 * ```
 */
export type Lookup<TKey extends string | number | symbol, TValue> = Readonly<
    Record<TKey, TValue>
>;
````
