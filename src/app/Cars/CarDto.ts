export interface CarRequestDto {
    name: string;
    price: number;
    year: number;
    size: string;
    availability: boolean;
    available_at?: Date;
    capacity: number;
    description?: string;
    picture_url?: string;
    car_transmission_id?: string;
    car_brand_id?: string;
    car_type_id?: string;
}