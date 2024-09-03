export interface Content {
    'content': string,
    'cover_image': string,
    'created_at': string,
    'id': number,
    'published_at': string,
    'slug': string,
    'table_of_contents': string,
    'title': string,
    'type': string,
    'updated_at': string,
    'url': string,
}

export interface ContentsData {
    data: Content[]
}