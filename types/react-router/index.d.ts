// Type definitions for React Router 4.0
// Project: https://github.com/ReactTraining/react-router
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>
//                 Yuichi Murata <https://github.com/mrk21>
//                 Václav Ostrožlík <https://github.com/vasek17>
//                 Nathan Brown <https://github.com/ngbrown>
//                 Alex Wendland <https://github.com/awendland>
//                 Kostya Esmukov <https://github.com/KostyaEsmukov>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Karol Janyst <https://github.com/LKay>
//                 Dovydas Navickas <https://github.com/DovydasNavickas>
//                 Tanguy Krotoff <https://github.com/tkrotoff>
//                 Huy Nguyen <https://github.com/huy-nguyen>
//                 Jérémy Fauvel <https://github.com/grmiade>
//                 Daniel Roth <https://github.com/DaIgeb>
//                 Egor Shulga <https://github.com/egorshulga>
//                 Youen Toupin <https://github.com/neuoy>
//                 Rahul Raina <https://github.com/rraina>
//                 Maksim Sharipov <https://github.com/pret-a-porter>
//                 Duong Tran <https://github.com/t49tran>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as H from 'history';

// This is the type of the context object that will be passed down to all children of
// a `Router` component:
export interface RouterChildContext<P> {
  router: {
    history: H.History
    route: {
      location: H.Location
      match: match<P>
    }
  };
}
export interface MemoryRouterProps {
  initialEntries?: H.LocationDescriptor[];
  initialIndex?: number;
  getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void);
  keyLength?: number;
}

export class MemoryRouter extends React.Component<MemoryRouterProps, any> { }

export interface PromptProps {
  message: string | ((location: H.Location) => string | boolean);
  when?: boolean;
}
export class Prompt extends React.Component<PromptProps, any> { }

export interface RedirectProps {
  to: H.LocationDescriptor;
  push?: boolean;
  from?: string;
  path?: string;
  exact?: boolean;
  strict?: boolean;
}
export class Redirect extends React.Component<RedirectProps, any> { }

export interface StaticContext {
  statusCode?: number;
}

export interface RouteComponentProps<P, C extends StaticContext = StaticContext> {
  history: H.History;
  location: H.Location;
  match: match<P>;
  staticContext: C | undefined;
}

export interface RouteProps {
  location?: H.Location;
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  render?: ((props: RouteComponentProps<any>) => React.ReactNode);
  children?: ((props: RouteComponentProps<any>) => React.ReactNode) | React.ReactNode;
  path?: string;
  exact?: boolean;
  strict?: boolean;
}
export class Route<T extends RouteProps = RouteProps> extends React.Component<T, any> { }

export interface RouterProps {
  history: H.History;
}
export class Router extends React.Component<RouterProps, any> { }

export interface StaticRouterContext {
  url?: string;
  action?: 'PUSH' | 'REPLACE';
  location?: object;
}
export interface StaticRouterProps {
  basename?: string;
  location?: string | object;
  context?: StaticRouterContext;
}

export class StaticRouter extends React.Component<StaticRouterProps, any> { }
export interface SwitchProps {
  children?: React.ReactNode;
  location?: H.Location;
}
export class Switch extends React.Component<SwitchProps, any> { }

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

// Omit taken from https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function matchPath<P>(pathname: string, props: RouteProps): match<P> | null;

// There is a known issue in TypeScript, which doesn't allow decorators to change the signature of the classes
// they are decorating. Due to this, if you are using @withRouter decorator in your code,
// you will see a bunch of errors from TypeScript. The current workaround is to use withRouter() as a function call
// on a separate line instead of as a decorator.
export function withRouter<P extends RouteComponentProps<any>>(component: React.ComponentType<P>): React.ComponentClass<Omit<P, keyof RouteComponentProps<any>>>;
