# Car Management

The application for manage the cars

## Database Design

https://dbdiagram.io/d/65478fca7d8bbd6465837c0c

## API Features

### Car Type

- #### Create Car Type
  [post] http://localhost:7000/api/v1/car-type

  => Request 
  ```json
  {
    "name": "Truck"
  }
  ```

  => Response
  ```json
  {
    "message": "Berhasil membuat data tipe mobil",
    "data": {
        "name": "Truck",
        "id": "9f9968f5-8209-46aa-89f6-91c4d7e904b4"
    }
  }
  ```

- #### Get all Car Type
  [get] http://localhost:7000/api/v1/car-type

  => Response
  ```json
  {
    "message": "Berhasil mendapatkan data tipe mobil",
    "data": [
        {
            "id": "8e3386be-633a-4a5b-89e0-21a4ec7ad642",
            "name": "Sport Utility Vehicle (SUV)"
        },
        {
            "id": "00c81856-23b9-4f9c-96ef-e43db00cf099",
            "name": "Multi Purpose Vehicle (MPV)"
        },
        {
            "id": "88cddf3e-024d-4b0e-a181-5b90196364eb",
            "name": "Sedan"
        },
        {
            "id": "a36863c8-00d5-4c32-bae3-4ef8b13292d1",
            "name": "Wagon"
        },
        {
            "id": "9a626f5a-a491-47b4-afd3-d92b73432374",
            "name": "Hatchback"
        },
        {
            "id": "c1c16f3c-aff9-4b1e-b8da-0cc4401cc5b8",
            "name": "Coupe"
        },
        {
            "id": "e1ecab2b-56b4-445e-b07f-2135028ae3cd",
            "name": "City Car"
        },
        {
            "id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
            "name": "Convertible "
        },
        {
            "id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
            "name": "Crossover"
        },
        {
            "id": "ff8d8f18-9f79-4a28-8514-813f0698c805",
            "name": "Microcar"
        },
        {
            "id": "2d450a45-aa2d-4ba6-91f3-b9a88879e912",
            "name": "Pikap"
        },
        {
            "id": "9f9968f5-8209-46aa-89f6-91c4d7e904b4",
            "name": "Truck"
        }
    ]
  }
  ```

- #### Get Car Type by id 
  [get] http://localhost:7000/api/v1/car-type/9f9968f5-8209-46aa-89f6-91c4d7e904b4

  => Response 
  ```json
  {
    "message": "Berhasil mendapatkan data tipe mobil",
    "data": {
        "id": "9f9968f5-8209-46aa-89f6-91c4d7e904b4",
        "name": "Truck"
    }
  }
  ```

- #### Update Car Type 
  [put] http://localhost:7000/api/v1/car-type/9f9968f5-8209-46aa-89f6-91c4d7e904b4

  => Request 
  ```json
  {
    "name": "Truck Update"
  }
  ```

  => Response
  ```json
  {
    "message": "Berhasil memperbarui data tipe mobil",
    "data": {
        "id": "9f9968f5-8209-46aa-89f6-91c4d7e904b4",
        "name": "Truck Update"
    }
  }
  ```

### Car Brand

- #### Create Car Brand
  [post] http://localhost:7000/api/v1/car-brand

  => Request 
  ```json
  {
    "name": "Wuling"
  }
  ```

  => Response 
  ```json
  {
    "message": "Berhasil membuat data brand mobil",
    "data": {
        "name": "Wuling",
        "id": "34e5b93a-ea06-40bc-95e7-926bb477a825"
    }
  }
  ```


- #### Get All Car Brand
  [get] http://localhost:7000/api/v1/car-brand

  => Response 
  ```json
  {
    "message": "Berhasil mendapatkan data brand mobil",
    "data": [
        {
            "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
            "name": "Toyota"
        },
        {
            "id": "64588529-731f-4353-8720-17690f69996a",
            "name": "Honda"
        },
        {
            "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
            "name": "Suzuki"
        },
        {
            "id": "34e5b93a-ea06-40bc-95e7-926bb477a825",
            "name": "Wuling"
        }
    ]
  }
  ```

- #### Get Car Brand by Id
  [get] http://localhost:7000/api/v1/car-brand/34e5b93a-ea06-40bc-95e7-926bb477a825

  => Response
  ```json
  {
    "message": "Berhasil mendapatkan data brand mobil",
    "data": {
        "id": "34e5b93a-ea06-40bc-95e7-926bb477a825",
        "name": "Wuling"
    }
  }
  ```

- #### Update Car Brand
  [put] http://localhost:7000/api/v1/car-brand/34e5b93a-ea06-40bc-95e7-926bb477a825

  => Request 
  ```json
  {
    "name": "Wuling Updated"
  }
  ```

  => Response
  ```json
  {
    "message": "Berhasil memperbarui data brand mobil",
    "data": {
        "id": "34e5b93a-ea06-40bc-95e7-926bb477a825",
        "name": "Wuling Updated"
    }
  }
  ```

### Car Transmission

- #### Create Car Transmission
  [post] http://localhost:7000/api/v1/car-transmission

  => Request 
  ```json
  {
    "name": "Matic"
  }
  ```

  => Response 
  ```json
  {
    "message": "Berhasil membuat mobil",
    "data": {
        "name": "Matic",
        "id": "6b096cc9-7ff3-4994-b6aa-47f786c9a1cc"
    }
  }
  ```


- #### Get All Car Transmission
  [get] http://localhost:7000/api/v1/car-transmission

  => Response 
  ```json
  {
    "message": "Berhasil mendapatkan data transmission",
    "data": [
        {
            "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "name": "Manual"
        },
        {
            "id": "c4d51740-8250-4d71-803c-c0b7f39bfe25",
            "name": "Automatic"
        },
        {
            "id": "ec69c821-aa1a-4fbf-9b2d-da6af948bab5",
            "name": "Transmisi Dual Clutch (DCT)"
        },
        {
            "id": "6b096cc9-7ff3-4994-b6aa-47f786c9a1cc",
            "name": "Matic"
        }
    ]
  }
  ```

- #### Get Car Transmission by Id
  [get] http://localhost:7000/api/v1/car-transmission/6b096cc9-7ff3-4994-b6aa-47f786c9a1cc

  => Response
  ```json
  {
    "message": "Berhasil mendapatkan data transmission",
    "data": {
        "id": "6b096cc9-7ff3-4994-b6aa-47f786c9a1cc",
        "name": "Matic"
    }
  }
  ```

- #### Update Car Transmission
  [put] http://localhost:7000/api/v1/car-transmission/6b096cc9-7ff3-4994-b6aa-47f786c9a1cc

  => Request 
  ```json
  {
    "name": "Matic Updated"
  }
  ```

  => Response
  ```json
  {
    "message": "Berhasil memperbarui data transmission",
    "data": {
        "id": "6b096cc9-7ff3-4994-b6aa-47f786c9a1cc",
        "name": "Matic Updated"
    }
  }
  ```


### CRUD Car

- #### Create Car
  [post] http://localhost:7000/api/v1/car

=> Request

```json
{
    "name": "Toyota Avanza",
    "price": 300000,
    "year": 2020,
    "size": "Medium",
    "availability": true,
    "available_at": "2023-11-09T14:00:00",
    "capacity": 6,
    "description": "Avanza new car",
    "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
    "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
    "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
    "car_type_id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08"
}
```

=> Response

```json
{
    "message": "Data berhasil disimpan",
    "data": {
        "name": "Toyota Avanza",
        "price": 300000,
        "size": "Medium",
        "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
        "year": 2020,
        "availability": true,
        "capacity": 6,
        "description": "Avanza new car",
        "available_at": "2023-11-09T14:00:00",
        "updated_at": "2023-11-09T14:25:02.969Z",
        "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
        "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
        "car_type_id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
        "id": "7212a1f8-ef58-4806-83f6-2c57f3659a11"
    }
}
```

- #### Update Car
  [put] http://localhost:7000/api/v1/car/:id

=> Request

```json
{
    "name": "Toyota Avanza New",
    "price": 320000,
    "year": 2019,
    "size": "Large",
    "availability": true,
    // "available_at": "2023-11-09T14:00:00",
    "capacity": 6,
    "description": "Avanza new car and updated",
    "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
    "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
    "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
    "car_type_id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08"
}
```

=> Response

```json
{
    "message": "Data berhasil disimpan",
    "data": {
        "id": "7212a1f8-ef58-4806-83f6-2c57f3659a11",
        "name": "Toyota Avanza New",
        "price": "320000.00",
        "year": 2019,
        "size": "Large",
        "availability": true,
        "capacity": 6,
        "description": "Avanza new car and updated",
        "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
        "available_at": "2023-11-09T07:00:00.000Z",
        "updated_at": "2023-11-09T14:33:18.922Z",
        "is_deleted": false,
        "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
        "car_type_id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
        "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
        "carType": {
            "id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
            "name": "Crossover"
        },
        "carBrand": {
            "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
            "name": "Toyota"
        },
        "carTransmission": {
            "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "name": "Manual"
        }
    }
}
```

#### Get All Cars

[get] http://localhost:7000/api/v1/car

=> Response

```json
{
    "message": "Berhasil mendapatkan data mobil",
    "data": [
        {
            "id": "64588529-731f-4353-8720-17690f69996a",
            "name": "Honda Brio",
            "price": "250000.00",
            "year": 2020,
            "size": "Small",
            "availability": true,
            "capacity": 5,
            "description": "small car",
            "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
            "available_at": "2023-11-09T01:38:39.582Z",
            "updated_at": "2023-11-09T01:38:39.582Z",
            "is_deleted": false,
            "car_brand_id": "64588529-731f-4353-8720-17690f69996a",
            "car_type_id": "ff8d8f18-9f79-4a28-8514-813f0698c805",
            "car_transmission_id": "c4d51740-8250-4d71-803c-c0b7f39bfe25",
            "carBrand": {
                "id": "64588529-731f-4353-8720-17690f69996a",
                "name": "Honda"
            },
            "carTransmission": {
                "id": "c4d51740-8250-4d71-803c-c0b7f39bfe25",
                "name": "Automatic"
            },
            "carType": {
                "id": "ff8d8f18-9f79-4a28-8514-813f0698c805",
                "name": "Microcar"
            }
        },
        {
            "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
            "name": "Suzuki Ertiga",
            "price": "350000.00",
            "year": 2022,
            "size": "Medium",
            "availability": true,
            "capacity": 5,
            "description": "Medium car",
            "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
            "available_at": "2023-11-09T01:38:39.582Z",
            "updated_at": "2023-11-09T01:38:39.582Z",
            "is_deleted": false,
            "car_brand_id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
            "car_type_id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
            "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "carBrand": {
                "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
                "name": "Suzuki"
            },
            "carTransmission": {
                "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
                "name": "Manual"
            },
            "carType": {
                "id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
                "name": "Crossover"
            }
        },
        {
            "id": "b464e8ae-8f9c-41c2-93e7-39fbc284f88b",
            "name": "Toyota Alphard Edit",
            "price": "700000.00",
            "year": 2023,
            "size": "Medium",
            "availability": true,
            "capacity": 7,
            "description": "Best kijang car",
            "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
            "available_at": "2023-11-09T01:38:39.582Z",
            "updated_at": "2023-11-09T13:11:57.550Z",
            "is_deleted": false,
            "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
            "car_type_id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
            "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "carBrand": {
                "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
                "name": "Toyota"
            },
            "carTransmission": {
                "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
                "name": "Manual"
            },
            "carType": {
                "id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
                "name": "Convertible "
            }
        },
        {
            "id": "7212a1f8-ef58-4806-83f6-2c57f3659a11",
            "name": "Toyota Avanza New",
            "price": "320000.00",
            "year": 2019,
            "size": "Large",
            "availability": true,
            "capacity": 6,
            "description": "Avanza new car and updated",
            "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
            "available_at": "2023-11-09T07:00:00.000Z",
            "updated_at": "2023-11-09T14:33:18.922Z",
            "is_deleted": false,
            "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
            "car_type_id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
            "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "carBrand": {
                "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
                "name": "Toyota"
            },
            "carTransmission": {
                "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
                "name": "Manual"
            },
            "carType": {
                "id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
                "name": "Crossover"
            }
        }
    ]
}
```

#### Get Cars filtered by Size

[get] http://localhost:7000/api/v1/car?size=medium

=> response

```json
{
    "message": "Berhasil mendapatkan data mobil",
    "data": [
        {
            "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
            "name": "Suzuki Ertiga",
            "price": "350000.00",
            "year": 2022,
            "size": "Medium",
            "availability": true,
            "capacity": 5,
            "description": "Medium car",
            "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
            "available_at": "2023-11-09T01:38:39.582Z",
            "updated_at": "2023-11-09T01:38:39.582Z",
            "is_deleted": false,
            "car_brand_id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
            "car_type_id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
            "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "carBrand": {
                "id": "72e15674-521d-4dd1-a8ef-4e7773954e23",
                "name": "Suzuki"
            },
            "carTransmission": {
                "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
                "name": "Manual"
            },
            "carType": {
                "id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
                "name": "Crossover"
            }
        },
        {
            "id": "b464e8ae-8f9c-41c2-93e7-39fbc284f88b",
            "name": "Toyota Alphard Edit",
            "price": "700000.00",
            "year": 2023,
            "size": "Medium",
            "availability": true,
            "capacity": 7,
            "description": "Best kijang car",
            "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
            "available_at": "2023-11-09T01:38:39.582Z",
            "updated_at": "2023-11-09T13:11:57.550Z",
            "is_deleted": false,
            "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
            "car_type_id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
            "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "carBrand": {
                "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
                "name": "Toyota"
            },
            "carTransmission": {
                "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
                "name": "Manual"
            },
            "carType": {
                "id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
                "name": "Convertible "
            }
        }
    ]
}
```

#### Get Cars filtered by name

[get] http://localhost:7000/api/v1/car?name=toyota

=> response

```json
{
    "message": "Berhasil mendapatkan data mobil",
    "data": [
        {
            "id": "b464e8ae-8f9c-41c2-93e7-39fbc284f88b",
            "name": "Toyota Alphard Edit",
            "price": "700000.00",
            "year": 2023,
            "size": "Medium",
            "availability": true,
            "capacity": 7,
            "description": "Best kijang car",
            "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
            "available_at": "2023-11-09T01:38:39.582Z",
            "updated_at": "2023-11-09T13:11:57.550Z",
            "is_deleted": false,
            "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
            "car_type_id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
            "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "carTransmission": {
                "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
                "name": "Manual"
            },
            "carBrand": {
                "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
                "name": "Toyota"
            },
            "carType": {
                "id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
                "name": "Convertible "
            }
        },
        {
            "id": "7212a1f8-ef58-4806-83f6-2c57f3659a11",
            "name": "Toyota Avanza New",
            "price": "320000.00",
            "year": 2019,
            "size": "Large",
            "availability": true,
            "capacity": 6,
            "description": "Avanza new car and updated",
            "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
            "available_at": "2023-11-09T07:00:00.000Z",
            "updated_at": "2023-11-09T14:33:18.922Z",
            "is_deleted": false,
            "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
            "car_type_id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
            "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "carTransmission": {
                "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
                "name": "Manual"
            },
            "carBrand": {
                "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
                "name": "Toyota"
            },
            "carType": {
                "id": "4a35dc3f-a948-4acd-a8b1-d8f18d5e1d08",
                "name": "Crossover"
            }
        }
    ]
}
```

#### Get Cars filtered by size & name & availability

[get] http://localhost:7000/api/v1/car?name=toyota&size=medium&availability=true

=> response

```json
{
    "message": "Berhasil mendapatkan data mobil",
    "data": [
        {
            "id": "b464e8ae-8f9c-41c2-93e7-39fbc284f88b",
            "name": "Toyota Alphard Edit",
            "price": "700000.00",
            "year": 2023,
            "size": "Medium",
            "availability": true,
            "capacity": 7,
            "description": "Best kijang car",
            "picture_url": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
            "available_at": "2023-11-09T01:38:39.582Z",
            "updated_at": "2023-11-09T13:11:57.550Z",
            "is_deleted": false,
            "car_brand_id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
            "car_type_id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
            "car_transmission_id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
            "carBrand": {
                "id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
                "name": "Toyota"
            },
            "carType": {
                "id": "c55e5705-e0ed-4880-8f2d-f6dd1c2e6a75",
                "name": "Convertible "
            },
            "carTransmission": {
                "id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
                "name": "Manual"
            }
        }
    ]
}
```

#### Delete Car

[delete] http://localhost:7000/api/v1/car/774358bf-5e02-4715-83f2-20a8aae8a7bc

=> Response

```json
{
  "message": "Data berhasil dihapus"
}
```

#### Upload Photo

[post] http://localhost:7000/api/v1/photo/upload
=> Request

```json
form-data:
key: picture
value: photo file
```

=> Response

```json
{
  "message": "Upload success",
  "url": "https://res.cloudinary.com/do5gw4vcx/image/upload/v1699175182/e0aotiuguzv69wdx12xc.png",
}
```
"# synrgy-challenge-5" 
#   s y n r g y - c h a l l e n g e - 6  
 #   s y n r g y - c h a l l e n g e - 6  
 "# synrgy-challenge-6" 
