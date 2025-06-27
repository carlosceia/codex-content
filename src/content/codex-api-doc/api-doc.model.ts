export interface ApiDoc {
  name: string;
  description?: string;
  type: string; // This could represent types like accessor, method, interface, etc.
  methods?: Method[];
  accessors?: any[];
  properties?: Property[];
  interfaces?: Interface[];
  import?: string;
  file?: string;
  extends?: string;
  children?: Children[];
  childs?: any[];
  subtype?: string;
  providers: Providers[];
  selector?: string;
  templateUrl?: string;
  inputsClass?: any[];
  outputsClass?: any[];
  methodsClass?: any[];
  propertiesClass?: any[];
  constructorObj?: Method;
}

interface Providers {
  name: string;
}

interface Children {
  type: string;
  elements: { name: string }[];
}

interface Method {
  name: string;
  description?: string;
  parameters?: Parameter[];
  returnType?: string;
  args?: any;
  modifierKind?: boolean;
  jsdoctags?: any;
}

interface Property {
  name: string;
  type: string;
  defaultValue?: any;
  decorators?: Decorator[];
  description?: string;
  optional?: boolean;
}

interface Interface {
  name: string;
  properties?: Property[];
}

interface Parameter {
  name: string;
  type: string;
  optional: boolean;
  description?: string;
}

interface Decorator {
  name: string;
  arguments?: string[];
  stringifiedArguments?: string;
}
