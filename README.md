# React Redux Book App 

## Topics Covered:
- `Redux`      --> State container for JS Apps
- `Reducers`   --> Functions that return piece of application state
- `Containers` --> A React-Component that has a direct connection to the state managed by Redux
- `react-redux` library
- `mapStateToProps` function to link between React and Redux containers (returns to this.props)
- `connect` function: takes in 2 args (a function and a component)--> Turns a `Component` into a `Container`
- The Action Creation Lifecycle:
   1) User Clicks a button on a component and calls an `Action Creator`
   2) `Action Creator` returns an `Action Object` --> {type, payload}
   3) `Action` passes through middleware when middleware is applied (optional)
   4) `Action Object` is sent to all `Reducers`
      ```
      > function mapDispatchToProps(dispatch){
      >   return bindActionCreators({selectBook: selectBook}, dispatch);
      > }
      ```
   5) Piece of `state` is set to the new value returned by the Reducer and piped to the `Application State`
   6) `Application State` is pumped back to the app
   7) All Components re-render 
      ```
      > function mapDispatchToProps(dispatch){
      >   return { books: state.books };
      > }
      ```
      
      ```
      > function mapStateToProps(state){
      >   return { books: state.books };
      > }
      ```
- Binding Action Creators (using `mapDispatchToProps --> bindActionCreators` and `mapStateToProps`
- Reducers get 2 args (state, action)
- Reducers are all combined via a `combineReducers` method insisde `reducers/index.js`
- Binding Context


### Getting started:

```
> npm install
> npm start
```
