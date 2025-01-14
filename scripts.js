class WeatherDashboard {
    constructor() {
        this.API_URL = 'https://weather-backend-txz6.onrender.com';
        this.searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        
        this.initializeElements();
        this.attachEventListeners();
        this.renderSearchHistory();
    }

    initializeElements() {
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.weatherInfo = document.getElementById('weatherInfo');
        this.loading = document.getElementById('loading');
        this.error = document.getElementById('error');
        this.searchHistoryList = document.getElementById('searchHistory');
    }

    attachEventListeners() {
        this.searchBtn.addEventListener('click', () => this.handleSearch());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSearch();
        });
        this.searchHistoryList.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                this.cityInput.value = e.target.textContent;
                this.handleSearch();
            }
        });
    }

    async handleSearch() {
        const city = this.cityInput.value.trim();
        if (!city) return;

        this.showLoading();
        
        try {
            const response = await fetch(`${this.API_URL}/weather?city=${encodeURIComponent(city)}`);
            const data = await response.json();
            console.log(data);

            if (!response.ok) throw new Error(data.message || 'Failed to fetch weather data');

            this.updateWeatherDisplay(data);
            this.addToSearchHistory(city);
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.hideLoading();
        }
    }

    updateWeatherDisplay(data) {
        document.getElementById('cityName').textContent = data.name;
        document.getElementById('region').textContent = `${data.region}, ${data.country}`;
        document.getElementById('temperature').textContent = `${data.temperature}°C`;
        document.getElementById('feelsLike').textContent = `${data.feelsLike}°C`;
        document.getElementById('condition').textContent = data.condition;
        document.getElementById('humidity').textContent = `${data.humidity}%`;
        document.getElementById('windSpeed').textContent = `${data.windSpeed} km/h`;
        document.getElementById('lastUpdated').textContent = data.lastUpdated;
        
        const iconElement = document.getElementById('conditionIcon');
        iconElement.src = `https:${data.conditionIcon}`;
        iconElement.alt = data.condition;

        this.weatherInfo.classList.remove('hidden');
        this.error.classList.add('hidden');
    }

    addToSearchHistory(city) {
        if (!this.searchHistory.includes(city)) {
            this.searchHistory.unshift(city);
            if (this.searchHistory.length > 5) {
                this.searchHistory.pop();
            }
            localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
            this.renderSearchHistory();
        }
    }

    renderSearchHistory() {
        this.searchHistoryList.innerHTML = this.searchHistory
            .map(city => `<li>${city}</li>`)
            .join('');
    }

    showLoading() {
        this.loading.classList.remove('hidden');
        this.weatherInfo.classList.add('hidden');
        this.error.classList.add('hidden');
    }

    hideLoading() {
        this.loading.classList.add('hidden');
    }

    showError(message) {
        this.error.textContent = message;
        this.error.classList.remove('hidden');
        this.weatherInfo.classList.add('hidden');
    }
}

// Initialize the dashboard when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WeatherDashboard();
}); 