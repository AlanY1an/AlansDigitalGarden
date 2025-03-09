import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import Image from "next/image";

const useMDXComponents = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  // Add other components here （can be h1 which is # in md)
};

interface MDXProps {
  code: string;
}

export function MDXContent({ code }: MDXProps) {
  const Component = useMDXComponents(code);
  return <Component components={components} />;
}
