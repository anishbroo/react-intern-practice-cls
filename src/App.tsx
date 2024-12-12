import React from "react";
import { Greet } from "./components/greet";
import { Person } from "./components/person";
import RenderClass from "./components/renderClass";
import RenderFunction from "./components/renderFunction";
import StateClass from "./components/stateClass";
import StateClassExample from "./components/stateClassExample";
import StateFunction from "./components/stateFunction";
import PropsClass from "./props/propsClass";
import PropsClassExample from "./props/propsClassExample";
import DefaultProps from "./props/defaultPropsClass";
import PropsFunction from "./props/propsFunction";
import ArrayProps from "./props/arrayProps";
import Parent from "./props/Parent";
import Constructor from "./lifecycle/mounting/constructor";
import Render from "./lifecycle/mounting/render";
import ChildC from "./props/ChildC";
import ParentC from "./props/ParentC";
import Child from "./props/Child";
import ComponentDidMount from "./lifecycle/mounting/componentDidMount";
import GetDerivedStateFromProps from "./lifecycle/mounting/getDerivedStateFromProps";
import ShouldComponentUpdate from "./lifecycle/updating/shouldComponentUpdate";
import ComponentWillUpdate from "./lifecycle/updating/componentWillUpdate";
import ComponentDidUpdate from "./lifecycle/updating/componentDidUpdate";
import ComponentWillUnmount from "./lifecycle/unmounting/componentWillUnmount";

const App: React.FC = () => {
  // //typing an object props
  // const personName = {
  //   first: "Bukayo",
  //   last: "Saka",
  // };
  // return (
  //   <>
  //     <Greet name="Anish Maharjan" message={20} />
  //     <Person name={personName} />
  //   </>
  // );

  // //Render class component and function component
  // return (
  //   <>
  //     <RenderClass />
  //     <RenderFunction />
  //   </>
  // );

  // //State class component
  // return (
  //   <>
  //     <StateClass />
  //   </>
  // );

  // //State class component example
  // return <StateClassExample />;

  // //State function component
  // return <StateFunction />;

  // //Props in class component
  // return (
  //   <>
  //     <PropsClass name="Jabulani" />;
  //     <PropsClassExample username="Timber" age={25} address="Netherland" />
  //     <DefaultProps />
  //     <ArrayProps num={[1, 2, 5, 6, 3, 9, 8, 7, 4]} />
  //     <Parent />
  //     <ParentC />
  //   </>
  // );

  // //Props in functional components
  // return (
  //   <PropsFunction name={"David"} age={33} address={"Rio"} contact={252536} />
  // );

  // //Mounting lifecycle method
  // return (
  //   <>
  //     <Constructor />
  //     <Render fruits={["Apple", "Banana", "Guava", "Cherry", "Mango"]} />
  //     <ComponentDidMount />
  //     <GetDerivedStateFromProps desh={"Belgium"} />
  //   </>
  // );

  // // Updating lifecycle method
  // return (
  //   <>
  //     <ShouldComponentUpdate />
  //     <ComponentWillUpdate />
  //     <ComponentDidUpdate />
  //   </>
  // );

  //Unmounting lifecycle method
  return <ComponentWillUnmount />;
};

export default App;
