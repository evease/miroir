function iconsTemps(temps) {
    switch (temps) {
        case 'Thunderstorm':
            return '<i class="wi wi-thunderstorm"></i>';
            break;
        case 'Drizzle':
            return '<i class="wi wi-storm-showers"></i>';
            break;
        case 'Rain':
            return '<i class="wi wi-rain"></i>';
            break;
        case 'Snow':
            return '<i class="wi wi-snow"></i>';
            break;
        case 'Atmosphere':
            return '<i class="wi wi-day-fog"></i>';
            break;
        case 'Clear':
            return '<i class="wi wi-day-sunny"></i>';
            break;
        case 'Clouds':
            return '<i class="wi wi-day-cloudy"></i>';
            break;
        case 'Extreme':
            return '<i class="wi wi-hurricane"></i>';
            break;
    }
}