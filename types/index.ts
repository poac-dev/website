type uuid = string;

interface PackageMetadata {
    name: string;
    version: string;
}

interface Metadata {
    package: PackageMetadata;
    dependencies: Record<string, unknown>;
}

export interface Package {
    id: uuid;
    metadata: Metadata;
}
