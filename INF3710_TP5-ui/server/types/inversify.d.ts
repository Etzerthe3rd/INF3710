export class AsyncContainerModule {
    constructor(registry: any);
    guid: any;
    registry: any;
}
export const BindingScopeEnum: {
    Request: string;
    Singleton: string;
    Transient: string;
};
export const BindingTypeEnum: {
    ConstantValue: string;
    Constructor: string;
    DynamicValue: string;
    Factory: string;
    Function: string;
    Instance: string;
    Invalid: string;
    Provider: string;
};
export class Container {
    static merge(container1: any, container2: any): any;
    constructor(/*containerOptions: any*/);
    options: any;
    guid: any;
    parent: any;
    applyCustomMetadataReader(metadataReader: any): void;
    applyMiddleware(...args: any[]): void;
    bind(serviceIdentifier: any): any;
    createChild(containerOptions: any): any;
    get(serviceIdentifier: any): any;
    getAll(serviceIdentifier: any): any;
    getAllNamed(serviceIdentifier: any, named: any): any;
    getAllTagged(serviceIdentifier: any, key: any, value: any): any;
    getNamed(serviceIdentifier: any, named: any): any;
    getTagged(serviceIdentifier: any, key: any, value: any): any;
    isBound(serviceIdentifier: any): any;
    isBoundNamed(serviceIdentifier: any, named: any): any;
    isBoundTagged(serviceIdentifier: any, key: any, value: any): any;
    load(...args: any[]): void;
    loadAsync(...args: any[]): any;
    rebind(serviceIdentifier: any): any;
    resolve(constructorFunction: any): any;
    restore(): void;
    snapshot(): void;
    unbind(serviceIdentifier: any): void;
    unbindAll(): void;
    unload(...args: any[]): void;
}
export class ContainerModule {
    constructor(registry: any);
    guid: any;
    registry: any;
}
export class LazyServiceIdentifer {
    constructor(cb: any);
    unwrap(): any;
}
export const METADATA_KEY: {
    DESIGN_PARAM_TYPES: string;
    INJECT_TAG: string;
    MULTI_INJECT_TAG: string;
    NAMED_TAG: string;
    NAME_TAG: string;
    OPTIONAL_TAG: string;
    PARAM_TYPES: string;
    POST_CONSTRUCT: string;
    TAGGED: string;
    TAGGED_PROP: string;
    UNMANAGED_TAG: string;
};
export class MetadataReader {
    getConstructorMetadata(constructorFunc: any): any;
    getPropertiesMetadata(constructorFunc: any): any;
}
export const TargetTypeEnum: {
    ClassProperty: string;
    ConstructorArgument: string;
    Variable: string;
};
export function decorate(decorator: any, target: any, parameterIndex: any): void;
export function getServiceIdentifierAsString(serviceIdentifier: any): any;
export function guid(): any;
export function inject(serviceIdentifier: any): any;
export function injectable(): any;
export function multiBindToService(container: any): any;
export function multiInject(serviceIdentifier: any): any;
export function named(name: any): any;
export function namedConstraint(value: any): any;
export function optional(): any;
export function postConstruct(): any;
export function tagged(metadataKey: any, metadataValue: any): any;
export function taggedConstraint(key: any): any;
export function targetName(name: any): any;
export function traverseAncerstors(request: any, constraint: any): any;
export function typeConstraint(type: any): any;
export function unmanaged(): any;
