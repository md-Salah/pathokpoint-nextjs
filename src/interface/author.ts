export interface Author {
    id: string;
    name: string;
    slug: string;
    image?: {
        src: string;
    } | null;
    description?: string;
}

export interface Tag {
    id: string;
    name: string;
    slug: string;
    private: boolean;
}
