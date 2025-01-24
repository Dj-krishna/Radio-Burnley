import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/WeatherNews.css";

const WeatherNews = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
        const city = "Clitheroe";

        // Current weather
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const weatherResult = await weatherResponse?.json();

        // 5-day forecast
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const forecastResult = await forecastResponse.json();

        setWeatherData(weatherResult);
        setForecast(forecastResult);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="weather-news-section">Loading...</div>;
  if (error) return <div className="weather-news-section">{error}</div>;
  if (!weatherData || !forecast) return null;

  const getDayForecast = () => {
    const dailyData = forecast?.list?.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );
    return dailyData?.slice(0, 4)?.map((day) => ({
      day: new Date(day.dt * 1000).toLocaleDateString("en-US", {
        weekday: "short",
      }),
      temp: `${Math.round(day.main.temp_max)}° / ${Math.round(
        day.main.temp_min
      )}°`,
      precip: `${Math.round(day.pop * 100)}%`,
    }));
  };

  return (
    <div className="weather-news-section">
      <Container>
        <Row className="g-4">
          <Col lg={3} md={6} sm={12}>
            <Card className="weather-card h-100">
              <Card.Header>
                <h2>WEATHER</h2>
                <h3>The forecast near you</h3>
              </Card.Header>
              <Card.Body>
                <div className="weather-location">
                  <h4>{weatherData?.name}</h4>
                  <div className="weather-main">
                    <div className="weather-icon">
                      {weatherData?.weather && (
                        <img
                          src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
                          alt={weatherData?.weather[0]?.description}
                        />
                      )}
                    </div>
                    <div className="temperature">
                      {Math.round(weatherData?.main?.temp)}°
                    </div>
                  </div>
                  <div className="weather-details">
                    <div className="detail">
                      <span>Humidity:</span>
                      <span>{weatherData?.main?.humidity}%</span>
                    </div>
                    <div className="detail">
                      <span>Wind:</span>
                      <span>
                        {Math.round(weatherData?.wind?.speed * 3.6)} km/h
                      </span>
                    </div>
                    <div className="detail">
                      <span>Pressure:</span>
                      <span>{weatherData?.main?.pressure} hPa</span>
                    </div>
                    <div className="detail">
                      <span>Feels like:</span>
                      <span>{Math.round(weatherData?.main?.feels_like)}°</span>
                    </div>
                  </div>
                  <div className="forecast">
                    {getDayForecast()?.map((day, index) => (
                      <div key={day.day + index} className="forecast-day">
                        <div>{day.day}</div>
                        <div>{day.temp}</div>
                        <div>{day.precip}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* 
                https://ribblefm.com/wp-content/plugins/weather-in-any-city-widget/resources/css/WIYCW-style.css?ver=1.1.41
                <script src="https://ribblefm.com/wp-content/plugins/weather-in-any-city-widget/resources/js/WIYCW-widget.js?ver=1.1.41"></script> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={9} md={6} sm={12}>
            <Card className="news-card h-100">
              <Card.Header>
                <h2>LOCAL NEWS</h2>
                <h3>Local News Headlines from the Lancashire Telegraph</h3>
              </Card.Header>
              <Card.Body>
                <Row className="g-4">
                  {[
                    {
                      title:
                        "PROBE LAUNCHED AFTER POLICE VAN RESPONDING TO CALL INVOLVED IN CRASH",
                      description:
                        "A police van responding to an emergency call was involved in a crash in Accrington this morning (January 19).",
                      image: "/news1.jpg",
                      link: "#",
                    },
                    {
                      title:
                        "TRIBUTE PAID TO LOVING FAMILY MAN KILLED IN BURNLEY CRASH",
                      description:
                        "Tributes have been paid to a loving family man who was killed in a crash in Burnley last week.",
                      image: "/news2.jpg",
                      link: "#",
                    },
                    {
                      title:
                        "RECAP: M6 SOUTHBOUND CLOSED DUE TO CRASH WITH DELAYS OF 60 MINUTES",
                      description:
                        "Traffic has been stopped on the M6 southbound near Preston due to a crash",
                      image: "/news3.jpg",
                      link: "#",
                    },
                  ].map((news, index) => (
                    <Col lg={4} md={12} sm={12} key={news.title + index}>
                      <Card className="news-item h-100">
                        <div className="news-img-container">
                          <Card.Img variant="top" src={news.image} />
                        </div>
                        <Card.Body>
                          <Card.Title>{news.title}</Card.Title>
                          <Card.Text>{news.description}</Card.Text>
                          <a href={news.link} className="read-more">
                            Read more »
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WeatherNews;
