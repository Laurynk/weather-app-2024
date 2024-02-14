interface ICurrentProps {
    date: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    }
    wind: {
        speed: number;
        deg: number;
        gust: number;
    }

}