export type SearchReqParams = {
    search: string;
};

export type NewsTrendItem = {
    date: string;
    doc_count: number;
};

export type NewsTrends = {
    trends: NewsTrendItem[];
};