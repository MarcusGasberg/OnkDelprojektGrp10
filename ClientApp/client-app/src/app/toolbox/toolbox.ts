export interface Toolbox {
    id: number;
    dateAcquired: Date;
    ownerId: number;
    make: string;
    color: string;
    model: string;
    serialNumber: string;
    toolIds: number[];
}