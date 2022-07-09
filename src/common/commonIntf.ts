export interface Items {
    limit: string;
    offset: string;
    total: number;
}


export interface Delete {
    acknowledged: boolean;
    deletedCount: number;
}