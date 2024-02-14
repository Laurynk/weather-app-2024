export default function WeatherPage(
    props: { data: ICurrentProps[] }
) {
    if (props.data.length) {
        return (
            <div>
                <h1>No weather forecast found</h1>
            </div>
        )
    }

    return (
        <>
            {
                props.data && props.data.map(({
                    main,
                    wind
                }: ICurrentProps, index: number) => {
                    return (
                        <div key={index}>
                            <div>{main.temp}</div>
                            <div>{wind.deg}</div>
                            <div>{wind.speed}</div>
                        </div>
                    )
                })
            }
        </>
    )
} 