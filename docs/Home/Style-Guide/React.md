[[_TOC_]]

# 1. Components

## `1.1:` Component file should be named using the name of the exported component function:

-   ✅ `src/features/desk/overview/IssueOverview.tsx`
-   ✅ `src/features/hardware/base-station/BaseStationDetails.tsx`
-   ❌ `src/features/issue-overview.tsx`

## `1.2:` Structure component into the following sections in the supplied order:

1. State/computed state/hooks
2. Helper functions and callbacks
3. useEffects
4. JSX

```jsx
function SampleComponent({ someProp }: IssueCountsDisplayProps) {
    // State/computed state

    const { data, isLoading } = useData(someProp);
    const [someState, setSomeState] = useState(someProp);
    const [someOtherState, setSomeOtherState] = useState(0);
    const computedState = someOtherState % 2 ? 'odd' : 'even';

    // helper functions and callbacks

    const onClick = () => {
        setSomeOtherState((current) => current + 1);
    };

    // useEffects

    useEffect(() => {
        setSomeState(someProp);
    }, [someProp]);

    // JSX

    return <View>...</View>;
}
```

## `1.3:` Components should export the component as the default export and export any props as a type:

```ts
export type UserAvatarProps = Readonly<{
    firstName: string;
    lastName: string;
}>;

export default function UserAvatar(props: UserAvatarProps) {
    // ...
}
```

## `1.4:` Components that are wrapped in a function call should be exported like:

```ts
function UserAvatar(props: UserAvatarProps) {
    // ...
}

export default memo(UserAvatar);
```

```ts
function UserInput(props: UserAvatarProps, ref: Ref<TextInput>) {
    // ...
}

export default forwardRef(UserAvatar);
```

```ts
function UserInput(props: UserAvatarProps, ref: Ref<TextInput>) {
    // ...
}

export default memo(forwardRef(UserAvatar));
```

## `1.5:` Components should not contain business logic, but should instead leverage hooks:

✅ Yes

```ts
function IssueCountsDisplay({ locationId }: IssueCountsDisplayProps) {
    const { counts, isLoading } = useIssueCountsForLocation(locationId);

    return; // ...
}
```

❌ No

```ts
function IssueCountsDisplay({ locationId }: IssueCountsDisplayProps) {
    const { counts, isLoading } = useQuery(['issue-counts', locationId], async () => {
        return sdClient.getIssueCountsForLocation(locationId);
    });

    return; // ...
}
```

## `1.6:` Break large components into several smaller ones:

✅ Yes

```jsx
function HardwareOverview({ locationId }: IssueCountsDisplayProps) {
    return (
        <HardwareOverviewLayout>
            <BaseStationsOverview locationId={locationId} />
            <RepeatersOverview locationId={locationId} />
            <HubsOverview locationId={locationId} />
        </HardwareOverviewLayout>
    );
}
```

## `1.7:` Keep logic in JSX to a minimum:

✅ Yes

```jsx
const addNewItem = () => {
    // handle add
};

return (
    <Button onClick={addNewItem}>Add Item</Button>;
);
```

✅ Yes

```jsx
const deleteItem = (item: Item) => {
    // handle item delete
};

return (
    <>
        {items.map((item) => (
            <Button key={item.id} onClick={() => deleteItem(item)}>
                Delete {item.name}
            </Button>
        ))}
    </>
);
```

❌ No

```jsx
return (
    <Button
        onClick={() => {
            // handle add
        }}>
        Add Item
    </Button>
);
```

## `1.8:` Do not compute values in JSX:

✅ Yes

```jsx
const x = Math.cos(angle) * length;
const y = Math.sin(angle) * length;

return (
    <Text>
        Position: {x}, {y}
    </Text>
);
```

❌ No

```jsx
return (
    <Text>
        Position: {Math.cos(angle) * length}, {Math.sin(angle) * length}
    </Text>
);
```

## `1.9:` Always apply a key when mapping collections in JSX:

✅ Yes

```jsx
return (
    <UserList>
        {users.map((user) => (
            <UserDetails key={user.id} user={user} /> // apply unique key
        ))}
    </UserList>
);
```

❌ No

```jsx
return (
    <UserList>
        {users.map((user) => (
            <UserDetails user={user} /> // missing key
        ))}
    </UserList>
);
```

## `1.10:` Do not use item index as a key when mapping collections in JSX:

❌ No

```jsx
return (
    <UserList>
        {users.map((user, index) => (
            <UserDetails key={index} user={user} /> // do not use item index
        ))}
    </UserList>
);
```

# 2. Hooks

## `2.1:` Hooks should export the hook as the default export:

```ts
export default function useIssueCountsByLocation(locationId: string) {
    return; // ...
}
```

## `2.2:` Hooks that require multiple parameters should instead use an options object and export the options as a type:

✅ Yes

```ts
export type UseIssueCountsByLocationOptions = Readonly<{
    locationId: string;
    refreshIntervalMs?: number;
}>;

export default function useIssueCountsByLocation(
    options: UseIssueCountsByLocationOptions
) {
    return; // ...
}
```

❌ No

```ts
export default function useIssueCountsByLocation(
    locationId: string,
    refreshIntervalMs?: number
) {
    return; // ...
}
```

## `2.3:` When naming useState variables use [noun, setNoun]:

✅ Yes

```ts
const [count, setCount] = useState(0);
const [userPreferences, setUserPreferences] = useState(...);
```

❌ No

```ts
const [count, updateCount] = useState(0);
const [userPreferences, updateUserPreferences] = useState(...);
```

## `2.4:` Use state initializer function when initializing state to objects or arrays (non constants):

✅ Yes

```ts
const [selectedNodes, setSelectedNodes] = useState<Node[]>(() => []);
```

✅ Yes

```ts
const [counts, setCounts] = useState(() => ({
    baseStations: 5,
    repeaters: 4,
    hubs: 6,
}));
```

✅ Yes

```ts
const DEFAULT_HARDWARE_COUNTS = {
    baseStations: 5,
    repeaters: 4,
    hubs: 6,
};

function HardwareCounts() {
    const [counts, setCounts] = useState(DEFAULT_HARDWARE_COUNTS);

    // ...
}
```

❌ No

```ts
// Will initialize new array on every render
const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);
```

❌ No

```ts
// Will initialize object on every render
const [counts, setCounts] = useState({
    baseStations: 5,
    repeaters: 4,
    hubs: 6,
});
```

## `2.5:` Use callback version of `useState` setter if referencing the current state value:

✅ Yes

```ts
const [count, setCount] = useState(0);

const increment = () => setCount((current) => current + 1);
```

❌ No

```ts
const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);
```

# 3. Optimization

## `3.1:` Use `useMemo` hook to memoize expensive calculations or create stable objects:

✅ Yes

```ts
// Will recompute only if employees changes
const activeEmployees = useMemo(
    () => employees.filter((employee) => employee.isActive),
    [employees]
);
```

❌ No

```ts
// Will recompute on every render
const activeEmployees = employees.filter((employee) => employee.isActive);
```

✅ Yes

```ts
// Will recompute only if hardwareList changes
const hardwareStats = useMemo(() => generateHardwareStats(hardwareList), [hardwareList]);
```

❌ No

```ts
// Will recompute on every render
const hardwareStats = generateHardwareStats(hardwareList);
```

## `3.2:` Do not use `useMemo` hook to memoize simple expressions:

✅ Yes

```ts
const hasSelections = selectedEmployees.length > 0;
```

❌ No

```ts
// Is less efficient
const hasSelections = useMemo(() => selectedEmployees.length > 0, [selectedEmployees]);
```

## `3.3:` Memoize all components that do not contain callback props:

✅ Yes

```ts
type EmployeeDisplayProps = {
    firstName: string;
    lastName: string;
    isSupervisor?: boolean;
}

function EmployeeDisplay(props: EmployeeDisplayProps) {
    return ...
}

export default memo(EmployeeDisplay);
```

❌ No

```ts
 // Unless memoized, the onClick handler will likely be a different
 // value on every render and the component will never be able to take
 // advantage of memoization.
type EmployeeDisplayProps = {
    firstName: string;
    lastName: string;
    isSupervisor?: boolean;
    onClick: () => void;
}

function EmployeeDisplay(props: EmployeeDisplayProps) {
    return ...
}

export default memo(EmployeeDisplay);
```

# 4. Contexts

## `4.1:` Do not export React contexts directly, but instead export the provider and related hooks:

✅ Yes

```jsx
export type UserContextValue = {
    currentUser?: User;
    setCurrentUser: (user: User) => void;
}

// do not export the React context
const UserContext = React.createContext<UserContextValue | null>(null);

// hook

export function useUserContext() {
    const ctx = useContext(UserContext);

    if (!ctx) {
        throw new Error('useUserContext was used outside of <UserProvider>');
    }

    return ctx;
}

// provider

export type UserProviderProps = {
    children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] => useState<User>();

    const contextValue = useMemo<UserContextValue>(() => ({
        currentUser:user,
        setCurrentUser:setUser
    }), [user]);

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

```
