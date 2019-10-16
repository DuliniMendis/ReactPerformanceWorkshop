## Usefult links

[React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
[Interaction Profiler](https://gist.github.com/bvaughn/8de925562903afd2e7a12554adcdda16)

## Interaction profiler

```
trace('Event name', performance.now(), () => {
})
```

## Checking for specific props in React.memo

```
(prevProps, nextProps) => {
  if (prevProps.specificProp !== nextProps.specificProp) {
    return false
  }
  return true
}
```