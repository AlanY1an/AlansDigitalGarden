import * as runtime from "react/jsx-runtime";
import { Image } from "next/image";
import { Callout } from "./callout";

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
