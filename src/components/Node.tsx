import React from "react";

type Nodes =
  | "a"
  | "button"
  | "div"
  | "form"
  | "h2"
  | "h3"
  | "img"
  | "input"
  | "label"
  | "li"
  | "nav"
  | "ol"
  | "p"
  | "span"
  | "svg"
  | "ul";

type NodeIntrinsicProps<T> = T extends keyof JSX.IntrinsicElements
  ? React.ComponentPropsWithRef<T> & { as: T }
  : never;
type NodeProps = NodeIntrinsicProps<Nodes>;

const Node = React.forwardRef(function Node(
  { as, ...props }: NodeProps,
  forwardedRef
) {
  const Comp = as as any;
  return <Comp {...props} ref={forwardedRef} />;
}) as React.ForwardRefExoticComponent<NodeProps>;

export default Node;
